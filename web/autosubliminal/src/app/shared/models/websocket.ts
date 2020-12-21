
// System websocket event received from server

import { Page } from './page';
import { Scheduler } from './scheduler';

// TODO: rename PROCESS_* to SCHEDULER_* once backend is also changed
export enum SystemWebSocketServerEventType {
  PAGE_RELOAD = 'PAGE_RELOAD',
  SCHEDULER_STARTED = 'PROCESS_STARTED',
  SCHEDULER_FINISHED = 'PROCESS_FINISHED'
}

export type SystemWebSocketServerEventData = Page | Scheduler;

export class SystemWebSocketServerEvent {
  type = 'EVENT';
  event: {
    type: SystemWebSocketServerEventType;
    data: SystemWebSocketServerEventData;
  };

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}

// System websocket notification received from server

export enum SystemWebSocketServerNotificationType {
  INFO = 'info',
  SUCCESS = 'succes',
  NOTICE = 'notice',
  ERROR = 'error'
}

export class SystemWebSocketServerNotification {
  type = 'NOTIFICATION';
  notification: {
    type: SystemWebSocketServerNotificationType;
    sticky: boolean;
    message: string;
  };

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}

// Websocket event sent from client
export enum SystemWebSocketClientEventType {
  RUN_PROCESS = 'RUN_PROCESS'
}

export class SystemWebSocketClientEvent {
  type = 'EVENT';
  event: {
    type: SystemWebSocketClientEventType;
    data: {
      name: string;
    }
  };

  constructor(type: SystemWebSocketClientEventType, name: string) {
    this.event = {
      type,
      data: {
        name
      }
    };
  }
}

export type SystemWebSocketServerMessage = SystemWebSocketServerEvent | SystemWebSocketServerNotification;

export type SystemWebSocketClientMessage = SystemWebSocketClientEvent;

export type SystemWebSocketMessage = SystemWebSocketServerMessage | SystemWebSocketClientMessage;

export type LogWebSocketMessage = string;
