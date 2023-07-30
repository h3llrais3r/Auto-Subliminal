export interface MovieScores {
  hash: number;
  title: number;
  year: number;
  source: number;
  quality: number;
  codec: number;
  releaseGroup: number;
  hearingImpaired: number;
  default: number; // default min score (real min score, without any match on source, quality, codec or releaseGroup)
  min: number; // configured min score (calculated based on which parts needs at least a match in the subliminal settings page)
  max: number; // absolute max score
}

export interface EpisodeScores extends MovieScores {
  season: number;
  episode: number;
}
