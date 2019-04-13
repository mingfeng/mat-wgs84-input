import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatWgs84InputModule } from 'projects/mat-wgs84-input/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatWgs84InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
