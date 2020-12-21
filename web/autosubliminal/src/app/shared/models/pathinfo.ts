export class PathInfo {
  freeBytes: number;
  freePercentage: number;
  freeSpace: string;
  name: string;
  path: string;
  totalBytes: number;
  totalSpace: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  get freeSpaceFormatted(): string {
    return `${this.freeSpace} of  ${this.totalSpace} (${this.freePercentage}%)`;
  }
}
