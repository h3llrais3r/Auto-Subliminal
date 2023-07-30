import moment from 'moment';
import strftime from 'strftime';
import { appSettings } from '../app-settings.service';

// Requires format for moment
export function getDateFromString(dateString: string, format?: string): Date {
  return moment(dateString, format).toDate();
}

export function formatDateTime(timeInMs: number, defaultValue = 'N/A'): string {
  if (timeInMs) {
    return strftime(appSettings.timestampFormat, new Date(timeInMs));
  } else {
    return defaultValue;
  }
}

export function formatDate(timeInMs: number, defaultValue = 'N/A'): string {
  if (timeInMs) {
    return strftime(appSettings.dateFormat, new Date(timeInMs));
  } else {
    return defaultValue;
  }
}

export function formatTime(timeInMs: number, defaultValue = 'N/A'): string {
  if (timeInMs) {
    return strftime(appSettings.timeFormat, new Date(timeInMs));
  } else {
    return defaultValue;
  }
}

export function formatDuration(durationInSeconds: number): string {
  const d = Math.floor(durationInSeconds / (3600 * 24));
  const h = Math.floor(durationInSeconds % (3600 * 24) / 3600);
  const m = Math.floor(durationInSeconds % 3600 / 60);
  const s = Math.floor(durationInSeconds % 60);
  const dText = d > 0 ? d + (d === 1 ? ' day ' : ' days ') : '';
  const hText = h > 0 ? h + (h === 1 ? ' hour ' : ' hours ') : '';
  const mText = m > 0 ? m + (m === 1 ? ' minute ' : ' minutes ') : '';
  const sText = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : '';
  return dText + hText + mText + sText;
}
