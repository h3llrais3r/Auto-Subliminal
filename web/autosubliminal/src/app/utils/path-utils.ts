import { appSettings } from '../app-settings.service';

export function joinPaths(...paths: string[]): string | null {
  if (paths) {
    return paths.join(appSettings.pathSeparator);
  } else {
    return null;
  }
}

export function splitPath(path: string): [string, string] | null {
  const paths = splitPathInChunks(path);
  if (paths) {
    const filePath = paths.slice(0, -1).join(appSettings.pathSeparator);
    const fileName = paths.pop();
    return [filePath, fileName];
  }
  return null;
}

export function splitPathInChunks(path: string): string[] | null {
  if (path) {
    return path.split(appSettings.pathSeparator);
  } else {
    return null;
  }
}
