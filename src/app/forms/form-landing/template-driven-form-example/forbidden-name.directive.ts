import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenNameDirective,
      multi: true,
    },
  ],
  standalone: true
})
export class ForbiddenNameDirective implements Validator {

  @Input('appForbiddenName') forbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const forbidden = control.value.toLowerCase().indexOf(this.forbiddenName) > -1;
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    }
    return null;
  }

}
