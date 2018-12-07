import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRefferalComponent } from './patient-refferal.component';

describe('PatientRefferalComponent', () => {
  let component: PatientRefferalComponent;
  let fixture: ComponentFixture<PatientRefferalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientRefferalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRefferalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
