import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { Card } from 'src/app/models/card.model';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-patient-prescription',
  templateUrl: './patient-prescription.component.html',
  styleUrls: ['./patient-prescription.component.css']
})
export class PatientPrescriptionComponent implements OnInit {
  card: Card;
  objDate = Date.now();
  prescription: any;
  name: any;
  patientId: any;

  date = new FormControl(new Date());
  minDate = new Date(this.objDate);
  maxDate = new Date(2019, 0, 1);

  constructor(
    private cardService: CardService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.cardService.getCardByPatientsId(id).subscribe(
      data => {
        this.card = data;
        this.name = this.card.patient.firstName + ' ' + this.card.patient.lastName;
        this.patientId = this.card.patient.id;
      }
    );
    this.initPrescriptionModel();
  }

  initPrescriptionModel() {
    this.prescription = {
      descriptionOfUse: '',
      drugName: '',
      doctorName: 'Dr Milisav',
      note: '',
      dataOfExpiry: ''
    }
  }
  public addPrescription() {
    this.cardService.addPrescriptionForPatient(this.prescription, this.patientId).subscribe(
      (data) =>
        this.snackBar.open("Successfully added prescription", "DONE", {
          duration: 2000,
        })
    );
  }

  public back() {
    this.router.navigate(['patient', this.patientId, 'exam']);
  }
}