import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'lib-mat-wgs84-input',
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
  decimalPlaces = 6;

  get empty() {
    const { degrees, minutes, seconds } = this.parts.value;
    return !degrees && !minutes && !seconds;
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
    const { degrees, minutes, seconds } = this.parts.value;
    return degrees + minutes / 60 + seconds / 3600;
  }
  set value(val: number | null) {
    if (val === null) {
      this.parts.setValue({ degrees: null, minutes: null, seconds: null });
    } else {
      const factor = Math.pow(10, this.decimalPlaces);
      const fullDegrees = Math.round(val * factor) / factor;
      const degrees = Math.round(fullDegrees);
      const fullMinutes = (fullDegrees % 1) * 60;
      const minutes = Math.round(fullMinutes);
      const seconds = (fullMinutes % 1) * 60;
      this.parts.setValue({ degrees, minutes, seconds });
    }
    this.stateChanges.next();
  }

  constructor(formBuilder: FormBuilder, private focusMonitor: FocusMonitor, private elRef: ElementRef<HTMLElement>) {
    this.parts = formBuilder.group({
      degrees: null,
      minutes: null,
      seconds: null
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
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }
}
