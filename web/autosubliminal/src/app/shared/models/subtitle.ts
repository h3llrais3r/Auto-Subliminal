export class Subtitle {
  wantedItemIndex: number;
  subtitleIndex: number;
  matches: string[];
  score: number;
  providerName: string;
  content: string;
  contentPreview: string;
  language: string;
  single: boolean;
  pageLink: string;
  releases: string[];
  playvideoUrl: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class SavedSubtitle {
  subtitlePath: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
