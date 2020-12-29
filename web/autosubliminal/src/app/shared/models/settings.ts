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
