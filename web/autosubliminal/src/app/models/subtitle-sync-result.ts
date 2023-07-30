export class SubtitleSyncResult {
  syncedSubtitlePath: string;
  offsetInSeconds: number;
  framerateScaleFactor: number;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
