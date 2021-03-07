import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { appSettings } from '../../../../app-settings.service';
import { SystemWebSocketClientEvent, SystemWebSocketClientEventType } from '../../../../shared/models/websocket';
import { SystemEventService } from '../../../services/system-event.service';
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
  currentTheme: string;
  systemUpdateAvailable = false;

  constructor(
    private router: Router,
    private webSocketService: WebSocketService,
    private systemEventService: SystemEventService,
    private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
      this.buildMenu();
    });
    this.systemEventService.systemUpdate.subscribe((systemUpdate) => {
      this.systemUpdateAvailable = systemUpdate.available;
      this.buildMenu();
    });
  }

  goHome(): void {
    this.router.navigateByUrl('/home');
  }

  getThemeClass(theme: string, currentTheme: string): string {
    return theme === currentTheme ? 'active' : '';
  }

  private buildMenu(): void {
    {
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
            },
            {
              separator: true
            },
            {
              label: 'Shows',
              icon: 'pi pi-fw pi-desktop',
              routerLink: '/library/show/overview'
            },
            {
              label: 'Movies',
              icon: 'pi pi-fw pi-video',
              routerLink: '/library/movie/overview'
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
                  command: () => this.themeService.changeTheme('bootstrap4-dark-blue'),
                  styleClass: this.getThemeClass('bootstrap4-dark-blue', this.currentTheme)
                },
                {
                  label: 'Dark purple',
                  icon: 'pi pi-fw bootstrap4-dark-purple',
                  command: () => this.themeService.changeTheme('bootstrap4-dark-purple'),
                  styleClass: this.getThemeClass('bootstrap4-dark-purple', this.currentTheme)
                },
                {
                  label: 'Light blue',
                  icon: 'pi pi-fw bootstrap4-light-blue',
                  command: () => this.themeService.changeTheme('bootstrap4-light-blue'),
                  styleClass: this.getThemeClass('bootstrap4-light-blue', this.currentTheme)
                },
                {
                  label: 'Light purple',
                  icon: 'pi pi-fw bootstrap4-light-purple',
                  command: () => this.themeService.changeTheme('bootstrap4-light-purple'),
                  styleClass: this.getThemeClass('bootstrap4-light-purple', this.currentTheme)
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
                  command: () => this.themeService.changeTheme('arya-blue'),
                  styleClass: this.getThemeClass('arya-blue', this.currentTheme)
                },
                {
                  label: 'Arya green',
                  icon: 'pi pi-fw arya-green',
                  command: () => this.themeService.changeTheme('arya-green'),
                  styleClass: this.getThemeClass('arya-green', this.currentTheme)
                },
                {
                  label: 'Arya orange',
                  icon: 'pi pi-fw arya-orange',
                  command: () => this.themeService.changeTheme('arya-orange'),
                  styleClass: this.getThemeClass('arya-orange', this.currentTheme)
                },
                {
                  label: 'Arya purple',
                  icon: 'pi pi-fw arya-purple',
                  command: () => this.themeService.changeTheme('arya-purple'),
                  styleClass: this.getThemeClass('arya-purple', this.currentTheme)
                },
                {
                  separator: true
                },
                {
                  label: 'Saga blue',
                  icon: 'pi pi-fw saga-blue',
                  command: () => this.themeService.changeTheme('saga-blue'),
                  styleClass: this.getThemeClass('saga-blue', this.currentTheme)
                },
                {
                  label: 'Saga green',
                  icon: 'pi pi-fw saga-green',
                  command: () => this.themeService.changeTheme('saga-green'),
                  styleClass: this.getThemeClass('saga-green', this.currentTheme)
                },
                {
                  label: 'Saga orange',
                  icon: 'pi pi-fw saga-orange',
                  command: () => this.themeService.changeTheme('saga-orange'),
                  styleClass: this.getThemeClass('saga-orange', this.currentTheme)
                },
                {
                  label: 'Saga purple',
                  icon: 'pi pi-fw saga-purple',
                  command: () => this.themeService.changeTheme('saga-purple'),
                  styleClass: this.getThemeClass('saga-purple', this.currentTheme)
                },
                {
                  separator: true
                },
                {
                  label: 'Vela blue',
                  icon: 'pi pi-fw vela-blue',
                  command: () => this.themeService.changeTheme('vela-blue'),
                  styleClass: this.getThemeClass('vela-blue', this.currentTheme)
                },
                {
                  label: 'Vela green',
                  icon: 'pi pi-fw vela-green',
                  command: () => this.themeService.changeTheme('vela-green'),
                  styleClass: this.getThemeClass('vela-green', this.currentTheme)
                },
                {
                  label: 'Vela orange',
                  icon: 'pi pi-fw vela-orange',
                  command: () => this.themeService.changeTheme('vela-orange'),
                  styleClass: this.getThemeClass('vela-orange', this.currentTheme)
                },
                {
                  label: 'Vela purple',
                  icon: 'pi pi-fw vela-purple',
                  command: () => this.themeService.changeTheme('vela-purple'),
                  styleClass: this.getThemeClass('vela-purple', this.currentTheme)
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
              icon: 'pi pi-fw pi-trash',
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
              label: 'Update version',
              icon: 'pi pi-fw pi-arrow-circle-up',
              command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SYSTEM_PROCESS, 'update')),
              visible: this.systemUpdateAvailable
            },
            {
              separator: true
            },
            {
              label: 'Flush cache',
              icon: 'pi pi-fw pi-trash',
              command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SYSTEM_PROCESS, 'flushCache'))
            },
            {
              label: 'Flush wanted',
              icon: 'pi pi-fw pi-trash',
              command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SYSTEM_PROCESS, 'flushWantedItems'))
            },
            {
              label: 'Flush downloads',
              icon: 'pi pi-fw pi-trash',
              command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent(SystemWebSocketClientEventType.RUN_SYSTEM_PROCESS, 'flushLastDownloads'))
            },
            {
              label: 'Flush library',
              icon: 'pi pi-fw pi-trash',
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
  }
}
