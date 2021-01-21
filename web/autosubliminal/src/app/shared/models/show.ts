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
  seasons?: ShowSeason[]; // only loaded for details

  constructor(obj?: any) {
    Object.assign(this, obj);
    if (this.settings) {
      this.settings = new ShowSettings(this.settings);
    }
    if (this.seasons) {
      this.seasons = this.seasons.map((season) => new ShowSeason(season));
    }
  }

  get name(): string {
    return `${this.title} (${this.year})`;
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

export class ShowSeason {
  seasonName: string;
  seasonPath: string;
  files: ShowFile[];

  constructor(obj?: any) {
    Object.assign(this, obj);
    if (this.files) {
      this.files = this.files.map((file) => new ShowFile(file));
    }
  }
}

export class ShowFile {
  tvdbId: number;
  filename: string;
  type: FileType;
  embeddedLanguages: string[];
  hardcodedLanguages: string[];
  language?: string; // only used for type = SUBTITLE

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  get isVideo(): boolean {
    return this.type === FileType.VIDEO;
  }

  get isSubtitle(): boolean {
    return this.type === FileType.SUBTITLE;
  }

  get internalLanguagesAvailable(): boolean {
    let available = false;
    if ((this.hardcodedLanguages && this.hardcodedLanguages.length > 0) || (this.embeddedLanguages && this.embeddedLanguages.length > 0)) {
      available = true;
    }
    return available;
  }
}
