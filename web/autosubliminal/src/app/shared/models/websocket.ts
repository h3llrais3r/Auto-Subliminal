
// System websocket event received from server

export type SystemWebSocketServerEventTypes = 'PAGE_RELOAD' | 'PROCESS_STARTED' | 'PROCESS_FINISHED';

export class SystemWebSocketServerEvent {
  type: 'EVENT';
  event: {
    type: SystemWebSocketServerEventTypes;
    data: any;
  };

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}

// System websocket notification received from server

export type SystemWebSocketServerNotificationTypes = 'info' | 'success' | 'notice' | 'error';

export class SystemWebSocketServerNotification {
  type: 'NOTIFICATION';
  notification: {
    type: SystemWebSocketServerNotificationTypes;
    sticky: boolean;
    message: string;
  };

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}

// Websocket event sent from client
export type SystemWebSocketClientEventTypes = 'RUN_PROCESS';

export class SystemWebSocketClientEvent {
  type: 'EVENT';
  event: {
    type: SystemWebSocketClientEventTypes;
    data: {
      name: string;
    }
  };

  constructor(type: SystemWebSocketClientEventTypes, name: string) {
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
