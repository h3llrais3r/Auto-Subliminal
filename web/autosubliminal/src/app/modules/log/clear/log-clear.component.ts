import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../../core/services/api/log.service';

@Component({
  selector: 'app-log-clear',
  templateUrl: './log-clear.component.html',
  styleUrls: ['./log-clear.component.scss']
})
export class LogClearComponent implements OnInit {

  constructor(private router: Router, private logService: LogService) { }

  ngOnInit(): void {
    this.logService.clearLogs().subscribe(
      result => {
        // Redirect to log view after the logs are cleared
        if (result) {
          this.router.navigateByUrl('/log/view');
        }
      }
    );
  }

}
