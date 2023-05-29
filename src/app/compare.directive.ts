import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[compare]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CompareDirective, multi: true }
  ]
})
export class CompareDirective implements Validator {
  @Input('compare')
    controlNameToCompare!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToCompare = control.root.get(this.controlNameToCompare);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { compare: true };
    }
    return null;
  }
}
