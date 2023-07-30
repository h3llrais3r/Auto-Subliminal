import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageSeverity } from '../../models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  standalone: true,
  imports: [NgIf, MessagesModule, SharedModule]
})
export class MessageComponent {

  @Input()
  visible = false;

  @Input()
  severity = MessageSeverity.INFO; // default info
}
