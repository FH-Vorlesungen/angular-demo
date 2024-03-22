import { Component } from '@angular/core';
import {ReactiveFormExampleComponent} from './reactive-form-example/reactive-form-example.component';
import {
  TemplateDrivenFormExampleComponent
} from './template-driven-form-example/template-driven-form-example.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-form-landing',
  standalone: true,
  imports: [
    ReactiveFormExampleComponent,
    TemplateDrivenFormExampleComponent,
    RouterOutlet
  ],
  templateUrl: './form-landing.component.html',
  styleUrl: './form-landing.component.scss'
})
export class FormLandingComponent {

}
