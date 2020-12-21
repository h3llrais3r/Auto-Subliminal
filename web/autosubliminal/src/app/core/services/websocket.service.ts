import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
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
      });
  }

  public sendMessageThroughSystemWebSocket(systemWebSocketClientMessage: SystemWebSocketClientMessage): void {
    this.systemWebsocket.next(systemWebSocketClientMessage);
  }

  private createSystemWebSocket(): WebSocketSubject<SystemWebSocketServerMessage> {
    let protocol = 'ws:';
    if (window.location.protocol === 'https:') {
      protocol = 'wss:';
    }
    const url = `${protocol}//${window.location.host}${appSettings.webRoot}/system/websocket`;
    return webSocket(url);
  }
}
