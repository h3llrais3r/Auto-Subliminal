import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { LogService } from '../../../core/services/api/log.service';
import { MessageService } from '../../../core/services/message.service';

@Component({
  selector: 'app-log-clear',
  templateUrl: './log-clear.component.html',
  styleUrls: ['./log-clear.component.scss']
})
export class LogClearComponent implements OnInit {

  private router = inject(Router);
  private logService = inject(LogService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.logService.clearLogs().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (result) => {
        // Redirect to log view after the logs are cleared
        if (result) {
          this.router.navigateByUrl('/log/view');
        }
      },
      error: () => this.messageService.showErrorMessage(`Unable to clear the logs!`)
    });
  }

}
