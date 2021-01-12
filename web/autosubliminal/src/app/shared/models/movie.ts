import { FileType } from './filetype';

export class MoviesOverview {
  totalMovies: number;
  totalSubtitlesWanted: number;
  totalSubtitlesMissing: number;
  totalSubtitlesAvailable: number;
  failedMovies: string[]; // list of paths of failed movies
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
  files?: MovieFiles[]; // only loaded for details

  constructor(obj?: any) {
    Object.assign(this, obj);
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

export class MovieFiles {
  imdbId: string;
  filename: string;
  type: FileType;
  embeddedLanguages: string[];
  hardcodedLanguages: string[];
  language?: string; // only used for type = SUBTITLE

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
