import { Component } from '@angular/core';
import {SomeOtherComponent} from './some-other/some-other.component';
import {GlobalServiceComponent} from './global-service/global-service.component';

@Component({
  selector: 'app-service-basics-landing',
  standalone: true,
  imports: [
    SomeOtherComponent,
    GlobalServiceComponent
  ],
  templateUrl: './service-basics-landing.component.html',
  styleUrl: './service-basics-landing.component.scss'
})
export class ServiceBasicsLandingComponent {

}
