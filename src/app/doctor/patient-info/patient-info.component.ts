import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.getPatientCard(id);
  }

  getPatientCard(id: any) {
    this.cardService.getCardByPatientsId(id).subscribe(
      data => {
        this.card = data;
      }
    );
  }
  public back() {
    this.router.navigate(['patient', this.patientId, 'exam']);
  }
}