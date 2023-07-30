import { appSettings } from '../../app-settings.service';
import { Language } from '../../models/language';

// Function to convert a list of language codes to a list of language objects
export function convertToLanguages(languageCodes: string[]): Language[] {
  const languages: Language[] = [];
  languageCodes.forEach((languageCode) => {
    appSettings.languages.forEach((language) => {
      if (language.code === languageCode) {
        languages.push(language);
      }
    });
  });
  return languages;
}

// Function to convert a list of language objects to a list of language codes
export function convertToLanguageCodes(languages: Language[]): string[] {
  const languageCodes: string[] = [];
  languages.forEach((language) => {
    languageCodes.push(language.code);
  });
  return languageCodes;
}
