
// System websocket event received from server

import { MessageSeverity } from './message';
import { Scheduler } from './scheduler';
import { SystemUpdate } from './systemupdate';

export enum SystemWebSocketServerEventType {
  SYSTEM_START = 'SYSTEM_START',
  SYSTEM_RESTART = 'SYSTEM_RESTART',
  SYSTEM_SHUTDOWN = 'SYSTEM_SHUTDOWN',
  SYSTEM_UPDATE = 'SYSTEM_UPDATE',
  SCHEDULER_START = 'SCHEDULER_START',
  SCHEDULER_FINISH = 'SCHEDULER_FINISH',
  WANTED_ITEM_UPDATE = 'WANTED_ITEM_UPDATE',
  WANTED_ITEM_DELETE = 'WANTED_ITEM_DELETE'
}

export type SystemWebSocketServerEventData = Scheduler | SystemUpdate;

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

export class SystemWebSocketServerNotification {
  type = 'NOTIFICATION';
  notification: {
    severity: MessageSeverity;
    sticky: boolean;
    message: string;
  };

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}

// Websocket event sent from client
export enum SystemWebSocketClientEventType {
  RUN_SCHEDULER = 'RUN_SCHEDULER',
  RUN_SYSTEM_PROCESS = 'RUN_SYSTEM_PROCESS'
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
