export class GeneralSettings {
  videoPaths: string[];
  defaultLanguage: string;
  defaultLanguageSuffix: string;
  additionalLanguages: string[];
  manualSearchWithScoring: boolean;
  scanDiskInterval: number;
  checkSubInterval: number;
  checkSubDeadline: number;
  checkSubDelta: number;
  checkVersionInterval: number;
  checkVersionAutoUpdate: boolean;
  scanEmbeddedSubs: boolean;
  scanHardcodedSubs: boolean;
  skipHiddenDirs: boolean;
  detectInvalidSubLanguage: boolean;
  detectedLanguageProbability: number;
  minVideoFileSize: number;
  maxDbResults: number;
  timestampFormat: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class LogSettings {
  logFile: string;
  logLevel: number;
  logNum: number;
  logSize: number;
  logHttpAccess: boolean;
  logExternalLibs: boolean;
  logDetailedFormat: boolean;
  logReversed: boolean;
  logLevelConsole: number;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class WebServerSettings {
  webServerIp: string;
  webServerPort: string;
  webRoot: string;
  userName: string;
  password: string;
  launchBrowser: boolean;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class PostProcessSettings {
  postProcess: boolean;
  postProcessIndividual: boolean;
  postProcessUtf8Encoding: boolean;
  showPostProcessCmd: string;
  showPostProcessArgs: string;
  moviePostProcessCmd: string;
  moviePostProcessArgs: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class NameMappingSettings {
  showNameMapping: string[];
  addic7edShowNameMapping: string[];
  alternativeShowNameMapping: string[];
  movieNameMapping: string[];
  alternativeMovieNameMapping: string[];

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
