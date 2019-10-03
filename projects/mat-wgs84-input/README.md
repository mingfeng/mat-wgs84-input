# MatWgs84Input

`<mat-wgs84-input>` is a form control that allows users to enter latitude/longitude in degrees, minutes, seconds and direction. It is meant to be used inside of a `<mat-form-field>` element, and act similarly as other form controls.

# Demo

[Demo](https://mingfeng.github.io/mat-wgs84-input/)

## How to use

Install `mat-wgs84-input` in your project:

    npm install --save mat-wgs84-input

Import `MatWgs84InputModule` in your app module:

```typescript
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatWgs84InputModule } from 'mat-wgs84-input';
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
```

Use component in template:

```html
<mat-form-field>
  <mat-wgs84-input placeholder="Latitude" type='latitude' [formControl]="latitude"></mat-wgs84-input>
</mat-form-field>

```
