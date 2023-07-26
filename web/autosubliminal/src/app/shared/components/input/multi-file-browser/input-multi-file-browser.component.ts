import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-multi-file-browser',
  templateUrl: './input-multi-file-browser.component.html',
  styleUrls: ['./input-multi-file-browser.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputMultiFileBrowserComponent),
    multi: true
  }]
})
export class InputMultiFileBrowserComponent extends InputComponent {

  @Input()
  folderMode = false; // default no folder mode (folder mode means selecting folders instead of files)

  showFileBrowser = false;
  addButtonDisabled = true;
  browserPath = '';
  browserIndex = -1;
  newValue: string;

  get values(): string[] {
    return this.control ? this.control.value : [];
  }

  // Required to only update single value inside array (https://angular.io/api/core/TrackByFunction) and do not refresh complete array
  trackValueByIndex(index: number, value: string): number {
    return index;
  }

  onValueKeyup(event: KeyboardEvent, originalValue: string): void {
    // Replace original value with change value
    const changedValue = (event.target as HTMLInputElement).value;
    if (changedValue && changedValue.trim()) {
      this.control.setValue(this.values.map((val) => val === originalValue ? changedValue.trim() : val));
    }
  }

  removeValue(value: string): void {
    // Remove value
    this.control.setValue(this.values.filter((val) => val !== value));
  }

  onNewValueKeyup(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    if (value && value.trim()) {
      this.addButtonDisabled = false;
    } else {
      this.addButtonDisabled = true;
    }
  }

  addNewValue(): void {
    // Add new value
    if (this.newValue) {
      if (!this.values.includes(this.newValue.trim())) {
        this.control.setValue(this.values.concat(this.newValue.trim()));
      }
      this.newValue = ''; // clear new value
      this.addButtonDisabled = true;
    }
  }

  openFileBrowser(path: string, index: number): void {
    this.browserPath = path || '';
    this.browserIndex = index;
    this.showFileBrowser = true;
  }

  setFilePath(filePath: string): void {
    if (this.browserIndex >= 0) {
      this.values[this.browserIndex] = filePath.trim();
    } else {
      this.values.push(filePath.trim());
    }
    this.control.setValue(this.values);
  }
}
