export class FileBrowserResult {
  files: string[];
  folders: string[];
  path: string;
}

export enum FileBrowserFileType {
  FILE = 'file',
  FOLDER = 'folder'
}

export class FileBrowserFile {
  type: FileBrowserFileType;
  name: string;

  constructor(type: FileBrowserFileType, name: string) {
    this.type = type;
    this.name = name;
  }
}
