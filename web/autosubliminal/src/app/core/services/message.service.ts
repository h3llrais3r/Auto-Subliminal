import { Injectable } from '@angular/core';
import { Message, MessageService as PrimeNgMessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private primeNgMessageService: PrimeNgMessageService) { }

  public showSuccessMessage(messageText: string): void {
    this.showMessage(messageText, MessageSeverity.SUCCESS);
  }

  public showInfoMessage(messageText: string): void {
    this.showMessage(messageText, MessageSeverity.INFO);
  }

  public showWarningMessage(messageText: string): void {
    this.showMessage(messageText, MessageSeverity.WARN);
  }

  public showErrorMessage(messageText: string): void {
    this.showMessage(messageText, MessageSeverity.ERROR);
  }

  public showMessage(messageText: string, messageSeverity: MessageSeverity): void {
    const message: Message = {
      summary: 'Auto-Subliminal',
      detail: messageText,
      severity: messageSeverity
    };
    this.primeNgMessageService.add(message);
  }
}

export enum MessageSeverity {
  SUCCESS = 'success',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error'
}
