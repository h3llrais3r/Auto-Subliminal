import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { WebSocketService } from '../../../services/websocket.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

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
          /*
          {
            label: 'Scan Disk',
            icon: 'pi pi-fw pi-play',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent('RUN_PROCESS', appSettings.scanDisk))
          },
          {
            label: 'Check Subtitles',
            icon: 'pi pi-fw pi-play',
            command: () => this.webSocketService.sendMessageThroughSystemWebSocket(new SystemWebSocketClientEvent('RUN_PROCESS', appSettings.checkSub))
          },
          */
          {
            label: 'Status',
            icon: 'pi pi-fw pi-info-circle',
            routerLink: '/system/status'
          }
        ]
      }
    ];
  }
}
