import {Routes} from '@angular/router';
import {ServiceBasicsLandingComponent} from './service-basics/service-basics-landing.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {HooksLandingComponent} from './hooks-landing/hooks-landing.component';
import {HttpDemoLandingComponent} from './http-demo-landing/http-demo-landing.component';
import {dummyGuard} from "./dummy.guard";

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
    component: HttpDemoLandingComponent,
    canActivate: [() => false],
  },
  {
    path: 'routing',
    loadComponent: () => import('./routing-basics/routing-landing/routing-landing.component').then(c => c.RoutingLandingComponent),
    canActivate: [dummyGuard()],
    data: {
      id: 123
    }
  },
  {
    path: 'forms',
    loadComponent: () => import('./forms/form-landing/form-landing.component').then(c => c.FormLandingComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./forms/form-landing/template-driven-form-example/template-driven-form-example.component').then(c => c.TemplateDrivenFormExampleComponent),
      },
      {
        path: 'template-driven',
        loadComponent: () => import('./forms/form-landing/template-driven-form-example/template-driven-form-example.component').then(c => c.TemplateDrivenFormExampleComponent),
      },
      {
        path: 'reactive',
        loadComponent: () => import('./forms/form-landing/reactive-form-example/reactive-form-example.component').then(c => c.ReactiveFormExampleComponent),
      }
    ]
  }
];
