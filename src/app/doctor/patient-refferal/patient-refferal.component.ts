import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  refferal: any;

  minDate = new Date(this.objDate);
  maxDate = new Date(2019, 0, 1);

  constructor(
    private cardService: CardService,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
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
    this.cardService.addRefferalForPatient(this.refferal, 1).subscribe(
      (data) =>
        this.snackBar.open("Successfully added refferal", "DONE", {
          duration: 2000,
        })
    );
  }
}