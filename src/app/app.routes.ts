import {Routes} from '@angular/router';
import {ServiceBasicsLandingComponent} from './service-basics/service-basics-landing.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {HooksLandingComponent} from './hooks-landing/hooks-landing.component';
import {HttpDemoLandingComponent} from './http-demo-landing/http-demo-landing.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'hooks',
    component: HooksLandingComponent
  },
  {
    path: 'service',
    component: ServiceBasicsLandingComponent
  },
  {
    path: 'http-demo',
    component: HttpDemoLandingComponent
  },
];
