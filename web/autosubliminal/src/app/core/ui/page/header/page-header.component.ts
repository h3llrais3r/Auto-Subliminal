import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private webSocketService: WebSocketService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Library',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'Overview',
            icon: 'pi pi-fw pi-list',
            routerLink: '/library/overview'
          }
        ],
        visible: appSettings.libraryMode
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Look & feel',
            icon: 'pi pi-fw pi-palette',
            items: [
              {
                label: 'Bootstrap 4',
                disabled: true
              },
              {
                separator: true
              },
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
              },
              {
                separator: true
              },
              {
                label: 'Primeone',
                disabled: true
              },
              {
                separator: true
              },
              {
                label: 'Arya blue',
                icon: 'pi pi-fw arya-blue',
                command: () => this.themeService.changeTheme('arya-blue')
              },
              {
                label: 'Arya green',
                icon: 'pi pi-fw arya-green',
                command: () => this.themeService.changeTheme('arya-green')
              },
              {
                label: 'Arya orange',
                icon: 'pi pi-fw arya-orange',
                command: () => this.themeService.changeTheme('arya-orange')
              },
              {
                label: 'Arya purple',
                icon: 'pi pi-fw arya-purple',
                command: () => this.themeService.changeTheme('arya-purple')
              },
              {
                separator: true
              },
              {
                label: 'Saga blue',
                icon: 'pi pi-fw saga-blue',
                command: () => this.themeService.changeTheme('saga-blue')
              },
              {
                label: 'Saga green',
                icon: 'pi pi-fw saga-green',
                command: () => this.themeService.changeTheme('saga-green')
              },
              {
                label: 'Saga orange',
                icon: 'pi pi-fw saga-orange',
                command: () => this.themeService.changeTheme('saga-orange')
              },
              {
                label: 'Saga purple',
                icon: 'pi pi-fw saga-purple',
                command: () => this.themeService.changeTheme('saga-purple')
              },
              {
                separator: true
              },
              {
                label: 'Vela blue',
                icon: 'pi pi-fw vela-blue',
                command: () => this.themeService.changeTheme('vela-blue')
              },
              {
                label: 'Vela green',
                icon: 'pi pi-fw vela-green',
                command: () => this.themeService.changeTheme('vela-green')
              },
              {
                label: 'Vela orange',
                icon: 'pi pi-fw vela-orange',
                command: () => this.themeService.changeTheme('vela-orange')
              },
              {
                label: 'Vela purple',
                icon: 'pi pi-fw vela-purple',
                command: () => this.themeService.changeTheme('vela-purple')
              }
            ]
          },
          {
            separator: true
          },
          {
            label: 'General',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/general'
          },
          {
            label: 'Library',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/library'
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
            label: 'Notification',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/notification'
          },
          {
            label: 'Postprocessing',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/settings/postprocessing'
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
        icon: 'pi pi-fw pi-desktop',
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
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SCHEDULER, appSettings.scanDisk))
          },
          {
            label: 'Check subtitles',
            icon: 'pi pi-fw pi-play',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SCHEDULER, appSettings.checkSub))
          },
          {
            label: 'Scan library',
            icon: 'pi pi-fw pi-play',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SCHEDULER, appSettings.scanLibrary)),
            visible: appSettings.libraryMode
          },
          {
            separator: true
          },
          {
            label: 'Check version',
            icon: 'pi pi-fw pi-tag',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SCHEDULER, appSettings.checkVersion))
          },
          {
            separator: true
          },
          {
            label: 'Flush cache',
            icon: 'pi pi-fw pi-times',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SYSTEM_PROCESS, 'flushCache'))
          },
          {
            label: 'Flush wanted',
            icon: 'pi pi-fw pi-times',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SYSTEM_PROCESS, 'flushWantedItems'))
          },
          {
            label: 'Flush downloads',
            icon: 'pi pi-fw pi-times',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SYSTEM_PROCESS, 'flushLastDownloads'))
          },
          {
            label: 'Flush library',
            icon: 'pi pi-fw pi-times',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SYSTEM_PROCESS, 'flushLibrary')),
            visible: appSettings.libraryMode
          },
          {
            separator: true
          },
          {
            label: 'Restart',
            icon: 'pi pi-fw pi-refresh',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SYSTEM_PROCESS, 'restart'))
          },
          {
            label: 'Shutdown',
            icon: 'pi pi-fw pi-power-off',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SYSTEM_PROCESS, 'shutdown'))
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

  goHome(): void {
    this.router.navigateByUrl('/home');
  }
}
