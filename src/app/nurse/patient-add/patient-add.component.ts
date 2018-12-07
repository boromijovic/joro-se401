import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {
  patient: any;
  patientId: 1;

  constructor(
    private patientService: PatientService,
    private router: Router) {
  }

  ngOnInit() {
    this.initPatientModel();
  }

  initPatientModel() {
    this.patient = new Patient();
    this.patient.firstName = "";
    this.patient.lastName = "";
    this.patient.phone = "";
    this.patient.email = "";
    this.patient.adress = "";
    this.patient.lbo = "";
  }

  public addPatient() {
    this.patientService.addPatient(this.patient).subscribe(
      (data) =>
        this.router.navigate(['patients'])
    );
  }
}