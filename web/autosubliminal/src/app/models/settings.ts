export class GeneralSettings {
  videoPaths: string[];
  defaultLanguage: string;
  defaultLanguageSuffix: string;
  additionalLanguages: string[];
  manualSearchWithScoring: boolean;
  scanDiskInterval: number;
  scanDiskAtStartup: boolean;
  checkSubInterval: number;
  checkSubAtStartup: boolean;
  checkSubDeadline: number;
  checkSubDelta: number;
  checkVersionInterval: number;
  checkVersionAtStartup: boolean;
  checkVersionAutoUpdate: boolean;
  scanEmbeddedSubs: boolean;
  scanHardcodedSubs: boolean;
  skipHiddenDirs: boolean;
  detectInvalidSubLanguage: boolean;
  detectedLanguageProbability: number;
  manualSubSync: boolean;
  ffmpegPath: string;
  minVideoFileSize: number;
  maxDbResults: number;
  timestampFormat: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class LibrarySettings {
  libraryMode: boolean;
  libraryPaths: string[];
  scanLibraryInterval: number;
  scanLibraryAtStartup: boolean;
  libraryEditMode: boolean;

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
  webServerPort: number;
  webRoot: string;
  userName: string;
  password: string;
  launchBrowser: boolean;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class SubliminalSettings {
  showMatchSource: boolean;
  showMatchQuality: boolean;
  showMatchCodec: boolean;
  showMatchReleaseGroup: boolean;
  movieMatchSource: boolean;
  movieMatchQuality: boolean;
  movieMatchCodec: boolean;
  movieMatchReleaseGroup: boolean;
  subliminalProviders: string[];
  subtitleUtf8Encoding: boolean;
  refineVideo: boolean;
  omdbApiKey: string;
  manualRefineVideo: boolean;
  preferHearingImpaired: boolean;
  antiCaptchaClass: string;
  antiCaptchaClientKey: string;
  addic7edUserName: string;
  addic7edPassword: string;
  addic7edUserId: string;
  opensubtitlesUserName: string;
  opensubtitlesPassword: string;
  opensubtitlesApiKey: string;
  legendastvUserName: string;
  legendastvPassword: string;

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

export class SkipMappingSettings {
  skipShowMapping: string[];
  skipMovieMapping: string[];

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class NotificationSettings {
  notify: boolean;
  notifyMail: boolean;
  mailServer: string;
  mailFromName: string;
  mailFrom: string;
  mailTo: string;
  mailUserName: string;
  mailPassword: string;
  mailSubject: string;
  mailEncryption: string;
  mailAuthentication: string;
  notifyTwitter: boolean;
  twitterKey: string;
  twitterSecret: string;
  notifyPushalot: boolean;
  pushalotApi: string;
  notifyPushover: boolean;
  pushoverKey: string;
  pushoverApi: string;
  pushoverDevices: string;
  notifyGrowl: boolean;
  growlHost: string;
  growlPort: number;
  growlPassword: string;
  growlPriority: number;
  notifyProwl: boolean;
  prowlApi: string;
  prowlPriority: number;
  notifyPushbullet: boolean;
  pushbulletApi: string;
  notifyTelegram: boolean;
  telegramBotApi: string;
  telegramChatId: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class TwitterRegistration {
  url: string;
  tokenKey: string;
  tokenSecret: string;
  tokenPin?: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class TwitterAuthorization {
  twitterKey: string;
  twitterSecret: string;

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
