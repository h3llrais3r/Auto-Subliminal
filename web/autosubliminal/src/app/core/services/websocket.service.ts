import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { appSettings } from '../../app-settings.service';
import { SystemWebSocketClientMessage, SystemWebSocketMessage, SystemWebSocketServerMessage } from '../../shared/models/websocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  systemWebsocket: WebSocketSubject<SystemWebSocketMessage>;

  constructor() {
    this.systemWebsocket = this.createSystemWebSocket();
    this.systemWebsocket.asObservable().subscribe(
      data => {
        if (data.type === 'EVENT') {
          console.log('Handling system server event');
        } else if (data.type === 'NOTIFICATION') {
          console.log('Handling system server notification');
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
