import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { appSettings } from '../../app-settings.service';
import { Page } from '../../shared/models/page';
import { Scheduler } from '../../shared/models/scheduler';
import { SystemWebSocketClientMessage, SystemWebSocketMessage, SystemWebSocketServerEvent, SystemWebSocketServerEventType, SystemWebSocketServerMessage, SystemWebSocketServerNotification } from '../../shared/models/websocket';
import { SystemEventService } from './system-event.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private systemWebsocket: WebSocketSubject<SystemWebSocketMessage>;

  constructor(private messageService: MessageService, private systemEventService: SystemEventService) {
    this.connect();
  }

  public sendMessageThroughSystemWebSocket(systemWebSocketClientMessage: SystemWebSocketClientMessage): void {
    this.systemWebsocket.next(systemWebSocketClientMessage);
  }

  private connect(): void {
    this.systemWebsocket = this.createSystemWebSocket();
    this.systemWebsocket.subscribe(
      serverMessage => {
        if (serverMessage.type === 'EVENT') {
          const serverEvent = serverMessage as SystemWebSocketServerEvent;
          switch (serverEvent.event.type) {
            case SystemWebSocketServerEventType.PAGE_RELOAD:
              this.systemEventService.notifyPageReload(new Page(serverEvent.event.data));
              break;
            case SystemWebSocketServerEventType.SCHEDULER_STARTED:
              this.systemEventService.notifySchedulerStarted(new Scheduler(serverEvent.event.data));
              break;
            case SystemWebSocketServerEventType.SCHEDULER_FINISHED:
              this.systemEventService.notifySchedulerFinished(new Scheduler(serverEvent.event.data));
              break;
            case SystemWebSocketServerEventType.SYSTEM_RESTARTED:
              this.systemEventService.notifySystemRestarted();
              break;
            default:
              console.error(`Invalid websocket server event type: ${serverEvent.event.type}`);
          }
        } else if (serverMessage.type === 'NOTIFICATION') {
          const serverNotification = serverMessage as SystemWebSocketServerNotification;
          const message: Message = {
            summary: 'Auto-Subliminal',
            detail: serverNotification.notification.message,
            severity: serverNotification.notification.type
          };
          this.messageService.add(message);
        } else {
          console.error(`Invalid websocket server message type: ${serverMessage.type}`);
        }
      },
      () => {
        console.error('Websocket connection error');
        this.reconnect();
      });
  }

  private reconnect(): void {
    interval(2000).pipe(takeWhile(() => !this.systemWebsocket)).subscribe(
      () => {
        console.log('Reconnecting to websocket');
        this.connect();
      });
  }

  private createSystemWebSocket(): WebSocketSubject<SystemWebSocketServerMessage> {
    let protocol = 'ws:';
    if (window.location.protocol === 'https:') {
      protocol = 'wss:';
    }
    const config: WebSocketSubjectConfig<SystemWebSocketServerMessage> = {
      url: `${protocol}//${window.location.host}${appSettings.webRoot}/system/websocket`,
      closeObserver: {
        next: () => {
          this.systemWebsocket = null;
          this.reconnect();
        }
      }
    };
    return webSocket(config);
  }
}
