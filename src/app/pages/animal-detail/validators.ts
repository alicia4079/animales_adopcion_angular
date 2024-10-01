import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static dniValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const dniPattern = /^[0-9]{8}[A-Z]$/;
      const valid = dniPattern.test(control.value);
      return valid ? null : { invalidDNI: true };
    };
  }

  static ageValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const age = control.value;
      return age >= 0 && age < 100 ? null : { invalidAge: true };
    };
  }
}
