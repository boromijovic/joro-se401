import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { Card } from 'src/app/models/card.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-patient-refferal',
  templateUrl: './patient-refferal.component.html',
  styleUrls: ['./patient-refferal.component.css']
})
export class PatientRefferalComponent implements OnInit {
  card: Card;
  objDate = Date.now();

  minDate = new Date(this.objDate);
  maxDate = new Date(2019, 0, 1);

  constructor(
    private cardService: CardService,
    private router: Router) {
  }

  ngOnInit() {
  }
}