import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../../core/services/api/log.service';
import { MessageService } from '../../../core/services/message.service';

@Component({
  selector: 'app-log-clear',
  templateUrl: './log-clear.component.html',
  styleUrls: ['./log-clear.component.scss']
})
export class LogClearComponent implements OnInit {

  constructor(private router: Router, private logService: LogService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.logService.clearLogs().subscribe(
      (result) => {
        // Redirect to log view after the logs are cleared
        if (result) {
          this.router.navigateByUrl('/log/view');
        }
      },
      () => this.messageService.showErrorMessage(`Unable to clear the logs!`)
    );
  }

}
