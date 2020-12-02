import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { appSettings } from '../../../../app-settings.service';
import { SystemWebSocketClientEvent, SystemWebSocketClientEventType } from '../../../../shared/models/websocket';
import { WebSocketService } from '../../../services/websocket.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  private readonly APP_URL = 'https://github.com/h3llrais3r/Auto-Subliminal';

  menuItems: MenuItem[];

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Config',
        icon: 'pi pi-fw pi-cog'
      },
      {
        label: 'Log',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'System',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Scan disk',
            icon: 'pi pi-fw pi-play',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_PROCESS, appSettings.scanDisk))
          },
          {
            label: 'Check subtitles',
            icon: 'pi pi-fw pi-play',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_PROCESS, appSettings.checkSub))
          },
          {
            label: 'Scan library',
            icon: 'pi pi-fw pi-play',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_PROCESS, appSettings.scanLibrary))
          },
          {
            separator: true
          },
          {
            label: 'Info',
            icon: 'pi pi-fw pi-info-circle',
            routerLink: '/system/info'
          },
          {
            label: 'Status',
            icon: 'pi pi-fw pi-info-circle',
            routerLink: '/system/status'
          },
          {
            separator: true
          },
          {
            label: 'Check version',
            icon: 'pi pi-fw pi-tag',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_PROCESS, appSettings.checkVersion))
          },
          {
            separator: true
          },
          {
            label: 'Report issue',
            icon: 'pi pi-fw pi-github',
            url: `${this.APP_URL}/issues`,
            target: '_blank'
          }
        ]
      }
    ];
  }
}
