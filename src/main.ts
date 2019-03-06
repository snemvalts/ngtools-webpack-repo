import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as angular from 'angular';




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



export const angularJSApp = angular.module('app');


