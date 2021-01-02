import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSwitchComponent),
    multi: true
  }]
})
export class InputSwitchComponent extends InputComponent implements OnInit {

  @Input()
  label: string;

  constructor(protected controlContainer: ControlContainer) {
    super(controlContainer);
  }

  ngOnInit(): void { }
}
