import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-patient-exam',
  templateUrl: './patient-exam.component.html',
  styleUrls: ['./patient-exam.component.css']
})
export class PatientExamComponent implements OnInit {
  card: Card;
  objDate: any;

  constructor(
    private cardService: CardService,
    private router: Router) {
  }

  ngOnInit() {
    this.objDate = Date.now();
  }

  public patientPrescription() {
    this.router.navigate(['patient', 1, 'prescription']);
  }
}