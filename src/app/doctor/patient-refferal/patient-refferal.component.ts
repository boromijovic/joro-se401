import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { Card } from 'src/app/models/card.model';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-patient-refferal',
  templateUrl: './patient-refferal.component.html',
  styleUrls: ['./patient-refferal.component.css']
})
export class PatientRefferalComponent implements OnInit {
  card: Card;
  objDate = Date.now();
  name: any;
  patientId: any;

  refferal: any;

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
    this.initRefferalModel();
  }

  initRefferalModel() {
    this.refferal = {
      patientId: 0,
      descriptionOfProblem: '',
      doctorName: 'Dr Milisav',
      refferingMD: '',
      note: '',
      data: ''
    }
  }
  public addRefferal() {
    this.cardService.addRefferalForPatient(this.refferal, this.patientId).subscribe(
      (data) =>
        this.snackBar.open("Successfully added refferal", "DONE", {
          duration: 2000,
        })
    );
  }

  public back() {
    this.router.navigate(['patient', this.patientId, 'exam']);
  }
}