import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatWgs84InputComponent } from './mat-wgs84-input.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('MatWgs84InputComponent', () => {
  let component: MatWgs84InputComponent;
  let fixture: ComponentFixture<MatWgs84InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatWgs84InputComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatWgs84InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display coordinate in sexagesimal correctly', () => {
    component.value = -77.508333;
    fixture.detectChanges();
  });
});
