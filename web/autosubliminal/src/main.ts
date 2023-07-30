import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ConfirmationService, MessageService } from 'primeng/api';
import { appInitializerFactory } from './app/app-initializer.factory';
import { AppSettingsService } from './app/app-settings.service';
import { AppComponent } from './app/app.component';
import routes from './app/app.routes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [AppSettingsService],
      multi: true
    },
    provideEnvironmentNgxMask(),
    importProvidersFrom(NgxWebstorageModule.forRoot()),
    MessageService, // primeng message service
    ConfirmationService // primeng confirmation service
  ]
}).catch((err) => console.error(err));
