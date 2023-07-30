export class SystemInfo {
  os: string;
  pid: number;
  releaseVersion: string;
  installType: SystemInstallType;
  currentVersion: string;
  currentVersionUrl: string;
  currentBranch: string;
  currentBranchUrl: string;
  systemEncoding: string;
  pythonVersion: string;
  pythonLocation: string;
  configFile: string;
  databaseFile: string;
  logFile: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export enum SystemInstallType {
  SOURCE = 'SOURCE',
  GIT = 'GIT'
}
