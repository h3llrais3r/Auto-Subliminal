import { formatDateTime, getDateFromString } from '../utils/date-utils';
import { VideoType } from './video';

export class Item {
  id: number;
  type: VideoType;
  title: string;
  year?: number;
  season?: number;
  episode?: number | number[];
  source: string | string[];
  quality: string;
  codec: string | string[];
  releaseGroup: string;
  tvdbId?: number;
  imdbId?: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  get isEpisode(): boolean {
    return this.type === VideoType.EPISODE;
  }

  get isMovie(): boolean {
    return this.type === VideoType.MOVIE;
  }

  get name(): string {
    let name = this.title;
    name += this.year ? ` (${this.year})` : '';
    return name;
  }

  get longName(): string {
    if (this.isEpisode) {
      // Episode format: title (year) SxxExx(-xx)
      const season = `00${this.season}`.slice(-2);
      const episode = Array.isArray(this.episode) ? this.episode.map((ep) => `00${ep}`.slice(-2)).join('-') : `00${this.episode}`.slice(-2);
      return `${this.name} S${season}E${episode}`;
    } else {
      // Movie format: title (year)
      return this.name;
    }
  }
}

export class WantedItem extends Item {
  videoFileName: string;
  videoFilePath: string;
  videoFileSize: string;
  libraryPath: string;
  timestamp: string; // format: YYYY-MM-DD HH:MM:SS
  languages: string[];
  isSearchActive: boolean;

  constructor(obj?: any) {
    super(obj);
  }

  get timestampFormatted(): string {
    return formatDateTime(getDateFromString(this.timestamp, 'YYYY-MM-DD hh:mm:ss').getTime());
  }
}

export class DownloadedItem extends Item {
  videoFileName: string;
  videoFilePath: string;
  language: string;
  timestamp: string; // format: YYYY-MM-DD HH:MM:SS
  subtitle: string;
  provider: string;

  constructor(obj?: any) {
    super(obj);
  }

  get timestampFormatted(): string {
    return formatDateTime(getDateFromString(this.timestamp, 'YYYY-MM-DD hh:mm:ss').getTime());
  }
}
