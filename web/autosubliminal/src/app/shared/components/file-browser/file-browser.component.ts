import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { appSettings } from '../../../app-settings.service';
import { FileSystemService } from '../../../core/services/api/filesystem.service';
import { FileBrowserFile, FileBrowserFileType, FileBrowserResult } from '../../models/filebrowser';
import { joinPaths, splitPathInChunks } from '../../utils/path-utils';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {

  private readonly FOLDER_UP = '...';

  @ViewChildren('rowElement')
  rowElements: QueryList<ElementRef<HTMLTableRowElement>>;

  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter<boolean>(); // Setup 2-way binding [(visible)]="..."

  @Input()
  path = ''; // no path by default, if specified, the file browser will start to browse on this path

  @Output()
  pathChange = new EventEmitter<string>(); // Setup 2-way binding [(path)]="..."

  @Input()
  folderMode = false; // default no folder mode (folder mode means selecting folders instead of files)

  fileBrowserFiles: FileBrowserFile[];
  selectedFile: FileBrowserFile;
  //selectedFilePath: string;
  selectedFilePath: UntypedFormControl;

  private fileBrowserResult: FileBrowserResult;
  private fileBrowserPath: string;
  private includeFiles = true;
  private includeFolders = true;

  constructor(private fileSystemService: FileSystemService) { }

  ngOnInit(): void {
    // In folder mode we don't want to select files, so do not include them
    if (this.folderMode) {
      this.includeFiles = false;
    }
    // Create and subscribe for selected file path changes
    // Use mergeMap to handle fast changes by typing in text field
    // Proper error catching to make sure the subscribe does not break on error (f.e. when invalid path is typed)
    this.selectedFilePath = new UntypedFormControl(this.path);
    this.selectedFilePath.valueChanges
      .pipe(mergeMap((path) => this.fileSystemService.browse(path, this.includeFiles, this.includeFolders).pipe(catchError(() => of(null)))))
      .subscribe({
        next: (result) => this.loadFileBrowserResult(result)
      });
    // Trigger initial browse
    this.fileSystemService.browse(this.path, this.includeFiles, this.includeFolders).subscribe({
      next: (result) => this.loadFileBrowserResult(result)
    });
  }

  select(): void {
    // Handle selection of file or folder
    if (this.selectedFile.type === FileBrowserFileType.FOLDER) {
      let folder = this.selectedFile.name;
      if (folder === this.FOLDER_UP) {
        const pathInChunks = splitPathInChunks(this.fileBrowserPath);
        const parentFolderchunks = pathInChunks.slice(0, -1); // get parent folder path in chunks
        // On Windows, if parent chunk is a drive letter (without \) we clear the path to get the root path
        if (parentFolderchunks.length === 1 && parentFolderchunks[0].match(/[A-Z]+:/)) {
          folder = '';
        } else {
          // All other cases, join chunks together for parent path
          folder = joinPaths(...parentFolderchunks);
        }
      } else {
        folder = this.getFilePath(folder); // get complete path of the folder
      }
      this.selectedFilePath.setValue(folder);
    } else {
      this.selectedFilePath.setValue(this.getFilePath(this.selectedFile.name));
    }
  }

  isFile(type: FileBrowserFileType): boolean {
    return FileBrowserFileType.FILE === type;
  }

  isFolder(type: FileBrowserFileType): boolean {
    return FileBrowserFileType.FOLDER === type;
  }

  isFolderUp(name: string): boolean {
    return name === this.FOLDER_UP;
  }

  selectFile(): void {
    this.pathChange.emit(this.selectedFilePath.value);
    this.close();
  }

  close(): void {
    this.visibleChange.emit(false);
  }

  private loadFileBrowserResult(fileBrowserResult: FileBrowserResult): void {
    // Check if present as the result can be null after an catch of an error in the api call
    if (fileBrowserResult) {
      // Set browser result
      this.fileBrowserResult = fileBrowserResult;
      // Set filebrowser path
      this.fileBrowserPath = this.fileBrowserResult.path;
      // Determine previously selected file name
      const selectedFileName = this.getSelectedFileName(this.selectedFilePath.value, this.fileBrowserPath);
      // Build browser files
      this.fileBrowserFiles = this.getFileBrowserFiles(this.fileBrowserResult, selectedFileName);
      // Insert folder up at beginning when not at root level (empty on Windows, / on unix)
      if (this.fileBrowserPath !== '' && this.fileBrowserPath !== '/') {
        this.fileBrowserFiles.unshift(new FileBrowserFile(FileBrowserFileType.FOLDER, this.FOLDER_UP));
      }
      // scroll to previously selected file name
      this.scrollToSelectedFileName(selectedFileName);
    }
  }

  private getSelectedFileName(selectedFilePath: string, fileBrowserPath: string): string {
    let selectedFileName = null;
    if (selectedFilePath && fileBrowserPath) {
      // The selected filename is the extra part after stripping the file browser path (which is always a folder) from the selected file path
      selectedFileName = joinPaths(...splitPathInChunks(selectedFilePath).filter((part) => !splitPathInChunks(fileBrowserPath).includes(part)));
    } else if (selectedFilePath) {
      // If file browser path is empty, the selecte file path is the selected filename
      selectedFileName = selectedFilePath;
    }
    return selectedFileName;
  }

  private getFileBrowserFiles(fileBrowserResult: FileBrowserResult, selectedFileName: string): FileBrowserFile[] {
    const files: FileBrowserFile[] = [];
    this.selectedFile = null;
    // Add folders
    fileBrowserResult.folders.forEach((folder) => files.push(new FileBrowserFile(FileBrowserFileType.FOLDER, folder)));
    // Add files
    fileBrowserResult.files.forEach((file) => {
      const fileBrowserFile = new FileBrowserFile(FileBrowserFileType.FILE, file);
      files.push(fileBrowserFile);
      // If the file is the selected file, mark it as selected
      if (file === selectedFileName) {
        this.selectedFile = fileBrowserFile;
      }
    });
    return files;
  }

  private scrollToSelectedFileName(selectedFileName: string): void {
    // Find the selected file name (if available) in the rows and scroll to it
    if (selectedFileName) {
      setTimeout(() => {
        // Find element based on data-id attribute
        const row = this.rowElements.find((r) => r.nativeElement.getAttribute('data-id') === selectedFileName);
        if (row) {
          row.nativeElement.scrollIntoView({ inline: 'start', block: 'start' });
        }
      });
    }
  }

  private getFilePath(path: string): string {
    let fileBrowserPath = this.fileBrowserPath;
    if (fileBrowserPath.endsWith(appSettings.pathSeparator)) {
      // Make sure not to end up with double path separators, so remove trailing path separator if available
      fileBrowserPath = fileBrowserPath.slice(0, -1);
    }
    return fileBrowserPath ? joinPaths(fileBrowserPath, path) : path;
  }
}
