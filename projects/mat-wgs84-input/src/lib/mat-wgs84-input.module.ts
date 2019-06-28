import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { MatWgs84InputComponent } from './mat-wgs84-input.component';

@NgModule({
  declarations: [MatWgs84InputComponent],
  imports: [BrowserModule, ReactiveFormsModule, MatSelectModule],
  exports: [MatWgs84InputComponent]
})
export class MatWgs84InputModule {}
