import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-file-browser',
  templateUrl: './input-file-browser.component.html',
  styleUrls: ['./input-file-browser.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFileBrowserComponent),
    multi: true
  }]
})
export class InputFileBrowserComponent extends InputComponent {

  @Input()
  path = ''; // no path by default, if specified, the file browser will always start to browse on this path

  @Input()
  folderMode = false; // default no folder mode (folder mode means selecting folders instead of files)

  @Input()
  placeholder = '';

  showFileBrowser = false;
  browserPath = '';

  openFileBrowser(): void {
    this.browserPath = this.path || this.control.value || ''; // use fixed path, path from input field or empty if not specified
    this.showFileBrowser = true;
  }

  setFilePath(filePath: string): void {
    this.control.setValue(filePath);
  }
}
