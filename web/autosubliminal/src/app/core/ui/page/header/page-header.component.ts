import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { appSettings } from '../../../../app-settings.service';
import { SystemWebSocketClientEvent, SystemWebSocketClientEventType } from '../../../../shared/models/websocket';
import { ThemeService } from '../../../services/theme.service';
import { WebSocketService } from '../../../services/websocket.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  private readonly APP_URL = 'https://github.com/h3llrais3r/Auto-Subliminal';

  menuItems: MenuItem[];

  constructor(private webSocketService: WebSocketService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'General',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/general'
          },
          {
            label: 'Logging',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/logging'
          },
          {
            label: 'Webserver',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/webserver'
          },
          {
            label: 'Subliminal',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/subliminal'
          },
          {
            label: 'Namemapping',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/namemapping'
          },
          {
            label: 'Skipmapping',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/skipmapping'
          },
          {
            label: 'Postprocessing',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/postprocessing'
          },
          {
            separator: true
          },
          {
            label: 'Look & feel',
            icon: 'pi pi-fw pi-palette',
            items: [
              {
                label: 'Dark blue',
                icon: 'pi pi-fw bootstrap4-dark-blue',
                command: () => this.themeService.changeTheme('bootstrap4-dark-blue')
              },
              {
                label: 'Dark purple',
                icon: 'pi pi-fw bootstrap4-dark-purple',
                command: () => this.themeService.changeTheme('bootstrap4-dark-purple')
              },
              {
                label: 'Light blue',
                icon: 'pi pi-fw bootstrap4-light-blue',
                command: () => this.themeService.changeTheme('bootstrap4-light-blue')
              },
              {
                label: 'Light purple',
                icon: 'pi pi-fw bootstrap4-light-purple',
                command: () => this.themeService.changeTheme('bootstrap4-light-purple')
              }
            ]
          }
        ]
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
          }
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
