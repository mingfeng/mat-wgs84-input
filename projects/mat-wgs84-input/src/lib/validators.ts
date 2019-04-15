import { AbstractControl } from '@angular/forms';

export class Validators {
  /**
   * Validator that requires a valid latitude value
   */
  static latitude = Validators.valueRangeValidator(-90, 90);

  /**
   * Validator that requires a valid longitude value
   */
  static longitude = Validators.valueRangeValidator(-180, 180);

  /**
   * Validator that requires values to be in the given range
   */
  static valueRangeValidator(min: number, max: number) {
    const fn = (control: AbstractControl): { [key: string]: any } | null => {
      return control.value >= min && control.value <= max ? null : { invalid: { value: control.value } };
    };
    return fn;
  }
}
