import { map, Observable } from 'rxjs';
import { AppSettingsService } from './app-settings.service';

export function appInitializerFactory(appSettingsService: AppSettingsService): () => Observable<void> {
  // If required multiple observables can be chained here
  return () => appSettingsService.load().pipe(map(() => undefined));
}
