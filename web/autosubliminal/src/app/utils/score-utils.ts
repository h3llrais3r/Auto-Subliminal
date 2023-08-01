import { appSettings } from '../app-settings.service';

export function calculateEpisodeScore(matchSource: boolean, matchQuality: boolean, matchCodec: boolean, matchReleaseGroup: boolean): number {
  let score = appSettings.episodeScores.default;
  score += matchSource ? appSettings.episodeScores.source : 0;
  score += matchQuality ? appSettings.episodeScores.quality : 0;
  score += matchCodec ? appSettings.episodeScores.codec : 0;
  score += matchReleaseGroup ? appSettings.episodeScores.releaseGroup : 0;
  return score;
}

export function calculateMovieScore(matchSource: boolean, matchQuality: boolean, matchCodec: boolean, matchReleaseGroup: boolean): number {
  let score = appSettings.episodeScores.default;
  score += matchSource ? appSettings.episodeScores.source : 0;
  score += matchQuality ? appSettings.episodeScores.quality : 0;
  score += matchCodec ? appSettings.episodeScores.codec : 0;
  score += matchReleaseGroup ? appSettings.episodeScores.releaseGroup : 0;
  return score;
}
