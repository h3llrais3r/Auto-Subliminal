import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { appSettings } from '../../app-settings.service';
import { WantedItem } from '../../shared/models/item';
import { Scheduler } from '../../shared/models/scheduler';
import { SystemUpdate } from '../../shared/models/systemupdate';
import { SystemWebSocketClientMessage, SystemWebSocketMessage, SystemWebSocketServerEvent, SystemWebSocketServerEventType, SystemWebSocketServerMessage, SystemWebSocketServerNotification } from '../../shared/models/websocket';
import { MessageService } from './message.service';
import { SystemEventService } from './system-event.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private readonly RECONNECT_INTERVAL = 2000;

  private systemWebsocket$: WebSocketSubject<SystemWebSocketMessage>;

  constructor(private messageService: MessageService, private systemEventService: SystemEventService) {
    this.connect();
  }

  public sendMessageThroughSystemWebSocket(systemWebSocketClientMessage: SystemWebSocketClientMessage): void {
    this.systemWebsocket$.next(systemWebSocketClientMessage);
  }

  private connect(): void {
    this.systemWebsocket$ = this.createSystemWebSocket();
    this.systemWebsocket$.subscribe({
      next: (serverMessage) => {
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
            case SystemWebSocketServerEventType.SYSTEM_UPDATE:
              this.systemEventService.notifySystemUpdate(new SystemUpdate(serverEvent.event.data));
              break;
            case SystemWebSocketServerEventType.SCHEDULER_START:
              this.systemEventService.notifySchedulerStart(new Scheduler(serverEvent.event.data));
              break;
            case SystemWebSocketServerEventType.SCHEDULER_FINISH:
              this.systemEventService.notifySchedulerFinish(new Scheduler(serverEvent.event.data));
              break;
            case SystemWebSocketServerEventType.WANTED_ITEM_UPDATE:
              this.systemEventService.notifyWantedItemUpdate(new WantedItem(serverEvent.event.data));
              break;
            case SystemWebSocketServerEventType.WANTED_ITEM_DELETE:
              this.systemEventService.notifyWantedItemDelete(new WantedItem(serverEvent.event.data));
              break;
            default:
              console.error(`Invalid websocket server event type: ${serverEvent.event.type}`);
          }
        } else if (serverMessage.type === 'NOTIFICATION') {
          const serverNotification = serverMessage as SystemWebSocketServerNotification;
          this.messageService.showMessage(serverNotification.notification.message, serverNotification.notification.severity, serverNotification.notification.sticky);
        } else {
          console.error(`Invalid websocket server message type: ${serverMessage.type}`);
        }
      }
      //error: () => { } // ignore, as it's already handled by closeObserver
    });
  }

  private reconnect(): void {
    interval(this.RECONNECT_INTERVAL).pipe(takeWhile(() => !this.systemWebsocket$)).subscribe({
      next: () => {
        console.log('Reconnecting to websocket...');
        this.connect();
      }
    });
  }

  private createSystemWebSocket(): WebSocketSubject<SystemWebSocketServerMessage> {
    let protocol = 'ws:';
    if (window.location.protocol === 'https:') {
      protocol = 'wss:';
    }
    const config: WebSocketSubjectConfig<SystemWebSocketServerMessage> = {
      url: `${protocol}//${window.location.host}${appSettings.webRoot}/websocket/system`,
      openObserver: { // on connect
        next: () => {
          console.log('Websocket connection established');
          this.systemEventService.notifyWebSocketConnectionInterrupted(false); // connection established
        }
      },
      closeObserver: { // try to reconnect on close
        next: () => {
          console.log('Websocket connection failed');
          this.systemEventService.notifyWebSocketConnectionInterrupted(true); // connection interrupted
          this.systemWebsocket$ = null;
          this.reconnect();
        }
      }
    };
    return webSocket(config);
  }
}
