import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElecComponent } from './admin-elec.component';

describe('AdminElecComponent', () => {
  let component: AdminElecComponent;
  let fixture: ComponentFixture<AdminElecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminElecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
