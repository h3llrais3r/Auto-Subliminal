import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { appSettings } from '../../../app-settings.service';
import { LogService } from '../../../core/services/api/log.service';
import { MessageService } from '../../../core/services/message.service';
import { ScrollService } from '../../../core/services/scroll.service';
import { Loglevel } from '../../../shared/models/loglevel';

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.scss']
})
export class LogViewComponent implements OnInit {

  private readonly LOG_MESSAGE_REGEX = /^((?<date>\d{4}\-\d{2}\-\d{2})\s(?<time>\d{2}:\d{2}:\d{2},\d{3})\s(?<loglevel>\w+))/;

  logNums: number[];
  selectedLogNum = 0;
  loglevels: SelectItem[];
  selectedLoglevel = '';
  loading = false;
  tailing = false;
  tailingDisabled = false; // true for non current (lognum != 0) logfiles as tailing has no use in this case
  tailButtonLabel = 'Start tailing';
  tailButtonIcon = 'pi pi-play';

  private logWebsocket: WebSocketSubject<string>;
  private logMessages: string[] = [];

  constructor(private logService: LogService, private messageService: MessageService, private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.loglevels = this.getLogLevels();
    this.logService.getLogCount().subscribe((count) => this.logNums = Array.from(Array(count).keys()).map((i) => i + 1)); // get array starting from 1
    this.getLogs(0); // 0 = current logfile
  }

  getLogs(logNum: number): void {
    this.loading = true;
    this.selectedLogNum = logNum;
    this.tailingDisabled = this.selectedLogNum !== 0; // tailing only allowed when on current logfile -> lognum = 0
    this.logService.getLogs(logNum).subscribe(
      (logLines) => {
        this.logMessages = logLines;
        this.loading = false;
        this.handleLogTailing();
      },
      () => this.messageService.showErrorMessage('Unable to get the logs!')
    );
  }

  toggleTailing(): void {
    this.tailing = !this.tailing;
    if (this.tailing) {
      // Change button label
      this.tailButtonLabel = 'Stop tailing';
      this.tailButtonIcon = 'pi pi-pause';
      // Scroll to right position when tailing is enabled
      if (appSettings.logReversed) {
        this.scrollService.triggerScrollUp();
      } else {
        this.scrollService.triggerScrollDown();
      }
    } else {
      // Change button label
      this.tailButtonLabel = 'Start tailing';
      this.tailButtonIcon = 'pi pi-play';
    }
    this.handleLogTailing();
  }

  get filteredLogMessages(): string[] {
    return this.logMessages.filter((logMessage) => {
      if (this.selectedLoglevel) {
        const match = this.LOG_MESSAGE_REGEX.exec(logMessage);
        return match && match.groups.loglevel === this.selectedLoglevel;
      } else {
        return true;
      }
    });
  }

  get logContent(): string {
    return this.filteredLogMessages.join('\n');
  }

  private getLogLevels(): SelectItem[] {
    const logLevels: SelectItem[] = [];
    logLevels.push({ label: 'ALL', value: '' });
    Object.entries(Loglevel).forEach((entry) => logLevels.push({ label: entry[0], value: entry[1] }));
    return logLevels;
  }

  private createLogWebSocket(): WebSocketSubject<string> {
    let protocol = 'ws:';
    if (window.location.protocol === 'https:') {
      protocol = 'wss:';
    }
    const url = `${protocol}//${window.location.host}${appSettings.webRoot}/websocket/log`;
    const config: WebSocketSubjectConfig<string> = {
      url,
      deserializer: (e: MessageEvent) => e.data as string,
      serializer: (value: string) => value,
    };
    return webSocket(config);
  }

  private handleLogTailing(): void {
    if (this.tailing && !this.tailingDisabled) {
      // Subscribe on new logs once loaded (only for current logfile -> logNum = 0)
      this.logWebsocket = this.createLogWebSocket(); // Need to create a new socket after unsubscribe
      this.logWebsocket.subscribe(
        (logMessage) => {
          if (appSettings.logReversed) {
            // Append to the top
            this.logMessages.unshift(logMessage);
            this.scrollService.triggerScrollUp();
          } else {
            // Append to the end
            this.logMessages.push(logMessage);
            this.scrollService.triggerScrollDown();
          }
        });
      console.log('Log tailing enabled');
    } else {
      // Unsubscribe when not tailing
      if (this.logWebsocket) {
        this.logWebsocket.unsubscribe();
      }
      console.log('Log tailing disabled');
    }
  }

}
