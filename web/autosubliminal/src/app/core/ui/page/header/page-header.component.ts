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
        items: [
          {
            label: 'View logs',
            icon: 'pi pi-fw pi-file',
            routerLink: '/log/view'
          },
          {
            separator: true
          },
          {
            label: 'Clear logs',
            icon: 'pi pi-fw pi-times',
            routerLink: '/log/clear'
          },
        ]
      },
      {
        label: 'System',
        icon: 'pi pi-fw pi-cog',
        items: [
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
            label: 'Check version',
            icon: 'pi pi-fw pi-tag',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_PROCESS, appSettings.checkVersion))
          },
          {
            separator: true
          },
          {
            label: 'Restart',
            icon: 'pi pi-fw pi-refresh',
            routerLink: '/system/restart'
          },
          {
            label: 'Shutdown',
            icon: 'pi pi-fw pi-power-off',
            routerLink: '/system/shutdown'
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
