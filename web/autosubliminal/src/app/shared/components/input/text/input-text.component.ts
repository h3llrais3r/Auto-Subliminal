import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
  }]
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
