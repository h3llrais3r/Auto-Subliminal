import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { SystemService } from '../../../core/services/api/system.service';

@Component({
  selector: 'app-system-restart',
  templateUrl: './system-restart.component.html',
  styleUrls: ['./system-restart.component.scss']
})
export class SystemRestartComponent implements OnInit {

  restarting = false;

  constructor(private router: Router, private systemService: SystemService) { }

  ngOnInit(): void {
    this.systemService.restart().subscribe(
      result => {
        this.restarting = result;
        const check = interval(2000).subscribe(
          () => {
            this.systemService.isAlive().subscribe(
              alive => {
                if (alive) {
                  this.restarting = false;
                  this.router.navigateByUrl('/home');
                  check.unsubscribe(); // stop the check
                }
                // continue the check
              });
          }
        );
      });
  }

}
