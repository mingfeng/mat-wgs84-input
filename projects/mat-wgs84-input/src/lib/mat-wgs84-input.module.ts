import { NgModule } from '@angular/core';
import { MatWgs84InputComponent } from './mat-wgs84-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MatWgs84InputComponent],
  imports: [ReactiveFormsModule],
  exports: [MatWgs84InputComponent]
})
export class MatWgs84InputModule {}
