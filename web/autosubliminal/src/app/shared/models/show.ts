import { FileType } from './filetype';

export class ShowsOverview {
  totalShows: number;
  totalEpisodes: number;
  totalSubtitlesWanted: number;
  totalSubtitlesMissing: number;
  totalSubtitlesAvailable: number;
  failedShows: string[]; // list of paths of failed shows

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class Show {
  tvdbId: number;
  title: string;
  year: string;
  path: string;
  pathInVideoPaths: boolean;
  overview: string;
  poster: string;
  banner: string;
  totalSubtitlesAvailable: number;
  totalSubtitlesMissing: number;
  totalSubtitlesWanted: number;
  settings: ShowSettings;
  files: ShowFiles[];

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class ShowSettings {
  wantedLanguages: string[];
  refine: boolean;
  hearingImpaired: boolean;
  utf8Encoding: boolean;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class ShowFiles {
  seasonName: string;
  seasonPath: string;
  seasonFiles: ShowSeasonFiles[];

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class ShowSeasonFiles {
  tvdbId: number;
  filename: string;
  type: FileType;
  embeddedLanguages: string[];
  hardcodedLanguages: string[];

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
