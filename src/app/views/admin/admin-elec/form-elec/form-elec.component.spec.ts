import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElecComponent } from './form-elec.component';

describe('FormElecComponent', () => {
  let component: FormElecComponent;
  let fixture: ComponentFixture<FormElecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormElecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
