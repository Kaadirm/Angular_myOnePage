import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// Routes Import (app.router sayfasını eklemek için eklendi)
// Angular'ın modüler bir yapıya sahip olduğunun kanıtıdır
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';


// App Config
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
