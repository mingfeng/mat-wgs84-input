import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject, Subscription } from 'rxjs';

export type CoordinateType = 'latitude' | 'longitude';

/* tslint:disable:component-selector */
@Component({
  selector: 'mat-wgs84-input',
  templateUrl: 'mat-wgs84-input.component.html',
  styleUrls: ['mat-wgs84-input.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: MatWgs84InputComponent },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatWgs84InputComponent),
      multi: true
    }
  ],
  host: {
    '[class.floating-label]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy'
  }
})
export class MatWgs84InputComponent implements ControlValueAccessor, MatFormFieldControl<number>, OnDestroy, OnInit {
  static nextId = 0;

  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  ngControl = null;
  errorState = false;
  controlType = 'mat-wgs84-input';
  id = `mat-wgs84-input-${MatWgs84InputComponent.nextId++}`;
  describedBy = '';
  precision = 7; // coordinate value precision

  get empty() {
    const { degrees, minutes, seconds } = this.parts.value;
    return degrees === null && minutes === null && seconds === null;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): number | null {
    if (this.empty) {
      return null;
    }

    const { degrees, minutes, seconds, direction } = this.parts.value;
    const degreeFactor = Math.pow(10, this.precision);
    const val = Math.round((degrees + minutes / 60 + seconds / 3600) * degreeFactor) / degreeFactor;
    return direction === 'S' || direction === 'W' ? -val : val;
  }
  set value(val: number | null) {
    if (val === null) {
      this.parts.setValue({ degrees: null, minutes: null, seconds: null, direction: null });
    } else {
      val = coerceNumberProperty(val);
      const direction = val > 0 ? this.directions[0] : this.directions[1];
      const degreeFactor = Math.pow(10, this.precision);
      const secondFactor = Math.pow(10, this.precision - 4);
      const fullDegrees = Math.round(Math.abs(val) * degreeFactor) / degreeFactor;
      const degrees = Math.floor(fullDegrees);
      const fullMinutes = (fullDegrees % 1) * 60;
      const minutes = Math.floor(fullMinutes);
      const seconds = Math.round((fullMinutes % 1) * 60 * secondFactor) / secondFactor;
      this.parts.setValue({ degrees, minutes, seconds, direction });
    }
    this.stateChanges.next();
  }

  @Input()
  get type(): CoordinateType | null {
    return this._type;
  }
  set type(value: CoordinateType | null) {
    this._type = value;
    this.stateChanges.next();
  }
  private _type: CoordinateType = 'latitude';

  get directions() {
    return this.type === 'longitude' ? ['E', 'W'] : ['N', 'S'];
  }

  get maxDegrees(): number {
    return this.type === 'latitude' ? 90 : 180;
  }

  private changeSubscription: Subscription;

  _onChange = (value: number) => {};
  _onTouched = () => {};

  constructor(
    private formBuilder: FormBuilder,
    private focusMonitor: FocusMonitor,
    private elRef: ElementRef<HTMLElement>
  ) {
    focusMonitor.monitor(elRef, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnInit() {
    this.parts = this.formBuilder.group({
      degrees: [null, [Validators.min(0), Validators.max(this.maxDegrees)]],
      minutes: [null, [Validators.min(0), Validators.max(60)]],
      seconds: [null, [Validators.min(0), Validators.max(60)]],
      direction: null
    });

    this.changeSubscription = this.parts.valueChanges.subscribe(() => {
      this.errorState = this.parts.invalid;
      this._onChange(this.parts.valid ? this.value : NaN);
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.changeSubscription.unsubscribe();
    this.focusMonitor.stopMonitoring(this.elRef);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    const tag = (event.target as Element).tagName.toLowerCase();
    if (tag !== 'input' && tag !== 'select') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: (value: number) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
