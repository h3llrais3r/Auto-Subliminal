import { NgClass } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputDropdownComponent),
    multi: true
  }],
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule, DropdownModule]
})
export class InputDropdownComponent extends InputComponent {

  @Input()
  options: SelectItem[];

  override writeValue(obj: any): void {
    super.writeValue(obj);
    this.changeDetectorRef.detectChanges(); // p-dropdown makes changes to the input, so detect changes again to prevent ExpressionChangedAfterItHasBeenCheckedError
  }

  onDropDownChange(event: DropdownChangeEvent): void {
    this.changeEvent.emit(event.originalEvent);
  }
}
