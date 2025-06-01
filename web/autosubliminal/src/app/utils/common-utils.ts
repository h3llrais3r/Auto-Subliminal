import { appSettings } from '../app-settings.service';

export function getPosterPlaceholderUrl(): string {
  return 'assets/poster-placeholder.jpg';
}

export function getBannerPlaceholderUrl(): string {
  return 'assets/banner-placeholder.jpg';
}

export function getDereferUrl(url: string): string {
  return `${appSettings.dereferUrl}${url}`;
}

export function getTvdbUrl(tvdbId: number): string {
  return getDereferUrl(`${appSettings.tvdbUrl}${tvdbId}`);
}

export function getImdbUrl(imdbId: string): string {
  return getDereferUrl(`${appSettings.imdbUrl}${imdbId}`);
}

export function getPlayVideoUrl(filePath: string, fileName: string): string {
  const path = `${filePath}${appSettings.pathSeparator}${fileName}`;
  return `playvideo://${encodeURIComponent(path)}`;
}
