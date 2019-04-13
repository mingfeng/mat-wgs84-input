import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MatWgs84InputComponent } from './mat-wgs84-input.component';

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

  it('should display latitude correctly', () => {
    component.type = 'latitude';
    component.value = -24.1234567;
    fixture.detectChanges();
    const degreesInput = fixture.debugElement.query(By.css('.degrees-input'));
    const minutesInput = fixture.debugElement.query(By.css('.minutes-input'));
    const secondsInput = fixture.debugElement.query(By.css('.seconds-input'));
    const directionSelect = fixture.debugElement.query(By.css('.direction-select'));
    expect(degreesInput.nativeElement.value).toEqual('24');
    expect(minutesInput.nativeElement.value).toEqual('7');
    expect(secondsInput.nativeElement.value).toEqual('24.45');
    expect(directionSelect.nativeElement.value).toEqual('S');
  });

  it('should display longitude correctly', () => {
    component.type = 'longitude';
    component.value = 12.7654321;
    fixture.detectChanges();
    const degreesInput = fixture.debugElement.query(By.css('.degrees-input'));
    const minutesInput = fixture.debugElement.query(By.css('.minutes-input'));
    const secondsInput = fixture.debugElement.query(By.css('.seconds-input'));
    const directionSelect = fixture.debugElement.query(By.css('.direction-select'));
    expect(degreesInput.nativeElement.value).toEqual('12');
    expect(minutesInput.nativeElement.value).toEqual('45');
    expect(secondsInput.nativeElement.value).toEqual('55.56');
    expect(directionSelect.nativeElement.value).toEqual('E');
  });
});
