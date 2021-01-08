import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { SystemService } from '../../../core/services/api/system.service';

@Component({
  selector: 'app-system-restart',
  templateUrl: './system-restart.component.html',
  styleUrls: ['./system-restart.component.scss']
})
export class SystemRestartComponent implements OnInit {

  restarting = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private systemService: SystemService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      // If restart is already triggered, just check when started
      if (params.triggered) {
        this.checkStarted();
      } else {
        // If restart is not yet triggered, trigger it and check when started
        this.systemService.restart().subscribe(() => this.checkStarted());
      }
    });
  }

  private checkStarted(): void {
    this.restarting = true;
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
  }
}
