import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WINDOW } from 'ngx-window-token';
import { filter, iif, interval, of, switchMap, take, takeWhile } from 'rxjs';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { appSettings, AppSettingsService } from '../app-settings.service';
import { WantedItem } from '../models/item';
import { Scheduler } from '../models/scheduler';
import { SystemUpdate } from '../models/systemupdate';
import { SystemWebSocketClientMessage, SystemWebSocketMessage, SystemWebSocketServerEvent, SystemWebSocketServerEventType, SystemWebSocketServerMessage, SystemWebSocketServerNotification } from '../models/websocket';
import { MessageService } from './message.service';
import { SystemEventService } from './system-event.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private readonly RECONNECT_INTERVAL = 5000;

  private systemWebsocket$: WebSocketSubject<SystemWebSocketMessage>;

  private window = inject(WINDOW);
  private messageService = inject(MessageService);
  private systemEventService = inject(SystemEventService);
  private appSettingsService = inject(AppSettingsService);
  private destroyRef = inject(DestroyRef);

  public initialize(): void {
    this.connect(true);
  }

  public sendMessageThroughSystemWebSocket(systemWebSocketClientMessage: SystemWebSocketClientMessage): void {
    this.systemWebsocket$.next(systemWebSocketClientMessage);
  }

  private connect(initial = false): void {
    this.systemWebsocket$ = this.createSystemWebSocket(initial);
    this.systemWebsocket$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
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
    interval(this.RECONNECT_INTERVAL).pipe(
      takeWhile(() => !this.systemWebsocket$),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: () => {
        console.log('Reconnecting to websocket...');
        this.connect();
      }
    });
  }

  private createSystemWebSocket(initial: boolean): WebSocketSubject<SystemWebSocketServerMessage> {
    let protocol = 'ws:';
    if (this.window.location.protocol === 'https:') {
      protocol = 'wss:';
    }
    const config: WebSocketSubjectConfig<SystemWebSocketServerMessage> = {
      url: `${protocol}//${this.window.location.host}${appSettings.webRoot}/websocket/system`,
      openObserver: { // on connect
        next: () => {
          console.log('Websocket connection established');
          // Only notify connection established when app settings could be reloaded
          // During initial websocket creation, the app settings should not be loaded, as they were already loaded before
          of(initial).pipe(
            switchMap((initial) => iif(() => initial, of(true), this.appSettingsService.load(true))), // bypass on initial setup
            take(1),
            filter((loaded) => loaded) // only notify loaded
          ).subscribe({
            next: () => this.systemEventService.notifyWebSocketConnectionStatus(true) // connection established
          });
        }
      },
      closeObserver: { // try to reconnect on close
        next: () => {
          console.log('Websocket connection failed');
          this.systemEventService.notifyWebSocketConnectionStatus(false); // connection interrupted
          this.systemWebsocket$ = null;
          this.reconnect();
        }
      }
    };
    return webSocket(config);
  }
}