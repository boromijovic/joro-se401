import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  card: Card;
  patientId: 1;

  constructor(
    private cardService: CardService,
    private router: Router) {
  }

  ngOnInit() {
    this.getPatientCard();
  }

  getPatientCard() {
    this.cardService.getCardByPatientsId(1).subscribe(
      data => {
        this.card = data;
      }
    );
  }
}