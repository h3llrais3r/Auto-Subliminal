import { inject, Injectable } from '@angular/core';
import { Message, MessageService as PrimeNgMessageService } from 'primeng/api';
import { MessageSeverity } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private primeNgMessageService = inject(PrimeNgMessageService);

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
      life: 5000,
      sticky
    };
    this.primeNgMessageService.add(message);
  }

  public clearMessages(): void {
    this.primeNgMessageService.clear();
  }
}
