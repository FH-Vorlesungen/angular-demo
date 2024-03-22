import {Component} from '@angular/core';
import {ForbiddenNameDirective} from '../template-driven-form-example/forbidden-name.directive';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {AnimalForm} from '../template-driven-form-example/animal-form.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-reactive-form-example',
  standalone: true,
  imports: [
    ForbiddenNameDirective,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.scss'
})
export class ReactiveFormExampleComponent {
  public animalGroup: FormGroup = new FormGroup({
    race: new FormControl('', Validators.required),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)/*,
      forbiddenNameValidator(/bob/i),*/ // <-- Here's how you pass in the custom validator.
    ]),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
  });
  private animalsSubject: BehaviorSubject<AnimalForm[]> = new BehaviorSubject<AnimalForm[]>([]);
  public animals$ = this.animalsSubject.asObservable();

  whenSubmit() {
    const form = new AnimalForm();
    form.race = this.animalGroup.get('race')?.value;
    form.name = this.animalGroup.get('name')?.value;
    form.age = this.animalGroup.get('age')?.value;
    this.animalsSubject.next([...this.animalsSubject.value, ...[form]]);
    this.animalGroup.reset();
  }

}
