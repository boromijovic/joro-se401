import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { Card } from 'src/app/models/card.model';
import { Therapy } from 'src/app/models/therapy.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  card: Card;
  objDate: any;
  therapy: any;


  constructor(
    private cardService: CardService,
    private router: Router,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
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
    // let datum = new Date(this.objDate);
    // console.log('DATUM ' + datum.toLocaleDateString('mediumDate'));

    this.cardService.addTherapyForPatient(this.therapy, 1).subscribe(
      (data) =>
        this.snackBar.open("Successfully added therapy", "DONE", {
          duration: 2000,
        })
    );
  }

  public patientPrescription() {
    this.router.navigate(['patient', 1, 'prescription']);
  }
}