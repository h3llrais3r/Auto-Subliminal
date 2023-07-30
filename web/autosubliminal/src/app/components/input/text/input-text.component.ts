import { NgClass } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { InputTextModule } from 'primeng/inputtext';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
  }],
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule, InputTextModule, NgxMaskDirective]
})
export class InputTextComponent extends InputComponent {

  @Input()
  type = 'text';

  @Input()
  placeholder = '';

  @Input()
  mask = '';

  @Input()
  dropSpecialCharacters = true;

  override writeValue(obj: any): void {
    super.writeValue(obj);
    this.changeDetectorRef.detectChanges(); // ngx-mask makes changes to the input, so detect changes again to prevent ExpressionChangedAfterItHasBeenCheckedError
  }
}
