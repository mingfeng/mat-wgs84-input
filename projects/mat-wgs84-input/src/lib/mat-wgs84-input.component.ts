import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';

type CoordinateType = 'latitude' | 'longitude';

/* tslint:disable:component-selector */
@Component({
  selector: 'mat-wgs84-input',
  templateUrl: 'mat-wgs84-input.component.html',
  styleUrls: ['mat-wgs84-input.component.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: MatWgs84InputComponent }],
  host: {
    '[class.floating-label]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy'
  }
})
export class MatWgs84InputComponent implements MatFormFieldControl<number>, OnDestroy {
  static nextId = 0;

  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  ngControl = null;
  errorState = false;
  controlType = 'mat-wgs84-input';
  id = `mat-wgs84-input-${MatWgs84InputComponent.nextId++}`;
  describedBy = '';
  decimalPlaces = 3;
  directions = ['N', 'S'];

  get empty() {
    const { degrees, minutes, seconds, direction } = this.parts.value;
    return !degrees && !minutes && !seconds && !direction;
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
    const { degrees, minutes, seconds, direction } = this.parts.value;
    const val = degrees + minutes / 60 + seconds / 3600;
    return direction === 'N' || direction === 'E' ? val : -val;
  }
  set value(val: number | null) {
    val = coerceNumberProperty(val);
    if (val === null) {
      this.parts.setValue({ degrees: null, minutes: null, seconds: null, direction: null });
    } else {
      const direction = val > 0 ? this.directions[0] : this.directions[1];
      const degreeFactor = Math.pow(10, this.decimalPlaces + 4);
      const secondFactor = Math.pow(10, this.decimalPlaces);
      const fullDegrees = Math.round(Math.abs(val) * degreeFactor) / degreeFactor;
      const degrees = Math.floor(fullDegrees);
      const fullMinutes = (fullDegrees % 1) * 60;
      const minutes = Math.floor(fullMinutes);
      const seconds = Math.round((fullMinutes % 1) * 60 * secondFactor) / secondFactor;
      this.parts.setValue({ degrees, minutes, seconds, direction});
    }
    this.stateChanges.next();
  }

  @Input()
  get type(): CoordinateType | null {
    return this._type;
  }
  set type(value: CoordinateType | null) {
    this._type = value;
    this.directions = value === 'longitude' ? ['E', 'W'] : ['N', 'S'];
    this.stateChanges.next();
  }
  private _type: CoordinateType = 'latitude';

  constructor(formBuilder: FormBuilder, private focusMonitor: FocusMonitor, private elRef: ElementRef<HTMLElement>) {
    this.parts = formBuilder.group({
      degrees: null,
      minutes: null,
      seconds: null,
      direction: null,
    });

    focusMonitor.monitor(elRef, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
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
}
