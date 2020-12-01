import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CountdownConfig } from 'ngx-countdown';
import { appSettings } from '../../../../app-settings.service';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {

  appVersion: string;
  scanDiskCountdown: CountdownConfig;
  checkSubCountdown: CountdownConfig;

  constructor() { }

  ngOnInit(): void {
    this.appVersion = appSettings.appVersion;
    const now = moment();
    this.scanDiskCountdown = {
      leftTime: moment.duration(moment(appSettings.scanDiskNextRunInMs).diff(now)).asSeconds()
    };
    this.checkSubCountdown = {
      leftTime: moment.duration(moment(appSettings.checkSubNextRunInMs).diff(now)).asSeconds()
    };
  }
}
