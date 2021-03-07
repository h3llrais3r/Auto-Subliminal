import { Injectable } from '@angular/core';
import { Message, MessageService as PrimeNgMessageService } from 'primeng/api';
import { MessageSeverity } from '../../shared/models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private primeNgMessageService: PrimeNgMessageService) { }

  public showSuccessMessage(messageText: string, sticky = false): void {
    this.showMessage(messageText, MessageSeverity.SUCCESS, sticky);
  }

  public showInfoMessage(messageText: string, sticky = false): void {
    this.showMessage(messageText, MessageSeverity.INFO, sticky);
  }

  public showWarningMessage(messageText: string, sticky = false): void {
    this.showMessage(messageText, MessageSeverity.WARN, sticky);
  }

  public showErrorMessage(messageText: string, sticky = false): void {
    this.showMessage(messageText, MessageSeverity.ERROR, sticky);
  }

  public showMessage(messageText: string, messageSeverity: MessageSeverity, sticky = false): void {
    const message: Message = {
      summary: 'Auto-Subliminal',
      detail: messageText,
      severity: messageSeverity,
      sticky
    };
    this.primeNgMessageService.add(message);
  }
}
