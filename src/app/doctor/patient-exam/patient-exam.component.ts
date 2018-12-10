import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { MatSnackBar } from '@angular/material';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-patient-exam',
  templateUrl: './patient-exam.component.html',
  styleUrls: ['./patient-exam.component.css']
})
export class PatientExamComponent implements OnInit {
  card: Card;
  objDate: any;
  therapy: any;
  name: any;
  patientId: any;

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
    this.objDate = Date.now();
    this.initTherapyModel();
  }

  initTherapyModel() {
    this.therapy = {
      description: "",
      symptoms: "",
      comments: "",
      dataOfExam: "",
    }
  }

  public addTherapy() {
    console.log('Therapy > ' + this.therapy.description + ' ' + this.therapy.symptoms + '  ' + this.therapy.comments + ' ' + this.therapy.dataOfExam);
    this.cardService.addTherapyForPatient(this.therapy, this.patientId).subscribe(
      (data) =>
        this.snackBar.open("Successfully added therapy", "DONE", {
          duration: 2000,
        })
    );
  }

  patientRefferal() {
    this.router.navigate(['patient', this.patientId, 'refferal']);
  }

  public patientPrescription() {
    this.router.navigate(['patient', this.patientId, 'prescription']);
  }
}