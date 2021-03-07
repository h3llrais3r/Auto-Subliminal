export class VideoSubtitles {
  fileLocation: string;
  fileName: string;
  languages: string[];

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export enum VideoType {
  EPISODE = 'episode',
  MOVIE = 'movie'
}
