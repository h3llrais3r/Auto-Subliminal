export class Language {
  code: string;
  name: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
