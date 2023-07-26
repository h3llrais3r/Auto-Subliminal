import { Component, Input } from '@angular/core';
import { MessageSeverity } from '../../models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input()
  visible = false;

  @Input()
  severity = MessageSeverity.INFO; // default info
}
