import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientExamComponent } from './patient-exam.component';

describe('PatientExamComponent', () => {
  let component: PatientExamComponent;
  let fixture: ComponentFixture<PatientExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientExamComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
