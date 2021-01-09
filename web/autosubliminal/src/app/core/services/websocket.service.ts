import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { appSettings } from '../../app-settings.service';
import { Scheduler } from '../../shared/models/scheduler';
import { SystemWebSocketClientMessage, SystemWebSocketMessage, SystemWebSocketServerEvent, SystemWebSocketServerEventType, SystemWebSocketServerMessage, SystemWebSocketServerNotification, SystemWebSocketServerNotificationType } from '../../shared/models/websocket';
import { MessageService, MessageSeverity } from './message.service';
import { SystemEventService } from './system-event.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private readonly RECONNECT_INTERVAL = 2000;

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
            case SystemWebSocketServerEventType.SYSTEM_START:
              this.systemEventService.notifySystemStart();
              break;
            case SystemWebSocketServerEventType.SYSTEM_RESTART:
              this.systemEventService.notifySystemRestart();
              break;
            case SystemWebSocketServerEventType.SYSTEM_SHUTDOWN:
              this.systemEventService.notifySystemShutdown();
              break;
            case SystemWebSocketServerEventType.SCHEDULER_START:
              this.systemEventService.notifySchedulerStart(new Scheduler(serverEvent.event.data));
              break;
            case SystemWebSocketServerEventType.SCHEDULER_FINISH:
              this.systemEventService.notifySchedulerFinish(new Scheduler(serverEvent.event.data));
              break;
            default:
              console.error(`Invalid websocket server event type: ${serverEvent.event.type}`);
          }
        } else if (serverMessage.type === 'NOTIFICATION') {
          const serverNotification = serverMessage as SystemWebSocketServerNotification;
          this.messageService.showMessage(serverNotification.notification.message, this.getMessageSeverity(serverNotification.notification.type));
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
    interval(this.RECONNECT_INTERVAL).pipe(takeWhile(() => !this.systemWebsocket)).subscribe(
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

  private getMessageSeverity(type: SystemWebSocketServerNotificationType): MessageSeverity {
    switch (type) {
      case SystemWebSocketServerNotificationType.SUCCESS:
        return MessageSeverity.SUCCESS;
      case SystemWebSocketServerNotificationType.INFO:
        return MessageSeverity.INFO;
      case SystemWebSocketServerNotificationType.NOTICE:
        return MessageSeverity.WARN;
      case SystemWebSocketServerNotificationType.ERROR:
        return MessageSeverity.ERROR;
      default:
        throw new Error(`Invalid message severity: ${type}`);
    }
  }
}
