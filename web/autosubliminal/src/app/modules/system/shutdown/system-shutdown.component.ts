import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { SystemService } from '../../../core/services/api/system.service';

@Component({
  selector: 'app-system-shutdown',
  templateUrl: './system-shutdown.component.html',
  styleUrls: ['./system-shutdown.component.scss']
})
export class SystemShutdownComponent implements OnInit {

  shuttingDown = false;
  shutdown = false;

  constructor(private systemService: SystemService) { }

  ngOnInit(): void {
    this.systemService.shutdown().subscribe(
      result => {
        this.shuttingDown = result;
        const check = interval(2000).subscribe(
          () => {
            this.systemService.isAlive().subscribe(
              alive => {
                // continue the check
              },
              error => {
                // no longer alive -> shutdown finished
                this.shuttingDown = false;
                this.shutdown = true;
                check.unsubscribe();
              }
            );
          }
        );
      });
  }

}
