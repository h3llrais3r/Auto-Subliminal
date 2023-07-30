import { joinPaths } from '../utils/path-utils';
import { FileType } from './filetype';

export class MoviesOverview {
  totalMovies: number;
  totalSubtitlesWanted: number;
  totalSubtitlesMissing: number;
  totalSubtitlesAvailable: number;
  failedMovies: string[]; // list of paths of failed movies

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class Movie {
  imdbId: string;
  title: string;
  year: string;
  path: string;
  pathInVideoPaths: boolean;
  overview: string;
  poster: string;
  totalSubtitlesAvailable: number;
  totalSubtitlesMissing: number;
  totalSubtitlesWanted: number;
  settings: MovieSettings;
  files?: MovieFile[]; // only loaded for details

  constructor(obj?: any) {
    Object.assign(this, obj);
    if (this.settings) {
      this.settings = new MovieSettings(this.settings);
    }
    if (this.files) {
      this.files = this.files.map((file) => new MovieFile(file));
    }
  }

  get name(): string {
    return `${this.title} (${this.year})`;
  }

  getMovieFile(fileType: FileType, fileName?: string): MovieFile | null {
    let movieFile = null;
    if (this.files) {
      if (fileName) {
        movieFile = this.files.find(file => file.fileName = fileName);
      } else {
        movieFile = this.files.find(file => file.type === fileType);
      }
    }
    return movieFile;
  }

  getMovieFilePath(fileType: FileType, fileName?: string): string | null {
    const movieFile = this.getMovieFile(fileType, fileName);
    return movieFile ? joinPaths(movieFile.filePath, movieFile.fileName) : null;
  }
}

export class MovieSettings {
  wantedLanguages: string[];
  refine: boolean;
  hearingImpaired: boolean;
  utf8Encoding: boolean;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class MovieFile {
  imdbId: string;
  filePath: string;
  fileName: string;
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
