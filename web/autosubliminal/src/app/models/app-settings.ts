import { AntiCaptchaProvider } from './captcha';
import { Language } from './language';
import { EpisodeScores, MovieScores } from './score';

export class AppSettings {
  appVersion: string;
  appProcessId: number;
  developerMode: boolean;
  webRoot = ''; // Make sure it's a string as it's used to all url connections to the backend (if not set it becomes undefined, which gives 404 errors)
  scanDisk: string;
  scanDiskIntervalDefault: number;
  scanLibrary: string;
  scanLibraryIntervalDefault: number;
  checkSub: string;
  checkSubIntervalDefault: number;
  checkSubDeadlineDefault: number;
  checkSubDeltaDefault: number;
  checkVersion: string;
  checkVersionIntervalDefault: number;
  libraryMode: boolean;
  libraryEditMode: boolean;
  logReversed: boolean;
  manualRefineVideo: boolean;
  preferHearingImpaired: boolean;
  manualSubSync: boolean;
  dereferUrl: string;
  tvdbUrl: string;
  imdbUrl: string;
  timestampFormat: string;
  pathSeparator: string;
  languages: Language[];
  subliminalProviders: string[];
  antiCaptchaProviders: AntiCaptchaProvider[];
  episodeScores: EpisodeScores;
  movieScores: MovieScores;

  get timeFormat(): string {
    return this.timestampFormat.split(' ')[0];
  }

  get dateFormat(): string {
    return this.timestampFormat.split(' ')[1];
  }

  public fromSettings(obj: any): void {
    Object.assign(this, obj);
  }
}
