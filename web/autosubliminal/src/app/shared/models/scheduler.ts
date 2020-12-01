import { formatDateTime, formatDuration } from '../utils/date-utils';

export class Scheduler {
  name: string;
  alive: boolean;
  ative: boolean;
  interval: number;
  lastRun: number;
  nextRun: number;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  get intervalFormatted(): string {
    return formatDuration(this.interval);
  }

  get lastRunFormatted(): string {
    return formatDateTime(this.lastRun);
  }

  get nextRunFormatted(): string {
    return formatDateTime(this.nextRun);
  }
}
