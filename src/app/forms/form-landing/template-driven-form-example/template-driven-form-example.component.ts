import {Component} from '@angular/core';
import {AnimalForm} from './animal-form.model';
import {FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {ForbiddenNameDirective} from './forbidden-name.directive';

@Component({
  selector: 'app-template-driven-form-example',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    ForbiddenNameDirective
  ],
  templateUrl: './template-driven-form-example.component.html',
  styleUrl: './template-driven-form-example.component.scss'
})
export class TemplateDrivenFormExampleComponent {
  public model: AnimalForm = new AnimalForm();
  public animals: AnimalForm[] = [];

  whenSubmit() {
    this.animals.push(this.model);
    this.animals = [...this.animals];
    this.model = new AnimalForm();
  }
}
