import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validators as WGS84Validators } from 'projects/mat-wgs84-input/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wgs84-input';
  form: FormGroup;

  get latitude(): AbstractControl {
    return this.form.get('latitude');
  }

  get latitudeErrorMessage(): string {
    return this.latitude.hasError('required') ? 'Latitude is required' : 'Invalid latitude';
  }

  get longitude(): AbstractControl {
    return this.form.get('longitude');
  }

  get longitudeErrorMessage(): string {
    return this.longitude.hasError('required') ? 'Longitude is required' : 'Invalid longitude';
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      latitude: [null, [Validators.required, WGS84Validators.latitude]],
      longitude: [null, [Validators.required, WGS84Validators.longitude]],
    });
  }
}
