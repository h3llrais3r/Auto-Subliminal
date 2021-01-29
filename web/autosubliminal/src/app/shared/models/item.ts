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

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  get name(): string {
    let name = this.title;
    name += this.year ? ` (${this.year})` : '';
    return name;
  }
}

export class WantedItem extends Item {
  videoPath: string;
  videoFileName: string;
  videoFileSize: string;
  libraryPath: string;
  timestamp: string; // format: YYYY-MM-DD HH:MM:SS
  languages: string[];
  isEpisode: boolean;
  isSearchActive: boolean;
  isMovie: boolean;
  tvdbId?: number;
  imdbId?: string;

  constructor(obj?: any) {
    super(obj);
  }

  get timestampFormatted(): string {
    return formatDateTime(getDateFromString(this.timestamp, 'YYYY-MM-DD hh:mm:ss').getTime());
  }
}

export class DownloadedItem extends Item {
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
