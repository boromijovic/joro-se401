import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Card } from "../../app/models/card.model";
import { Therapy } from '../models/therapy.model';
import { Prescription } from '../models/prescription.model';
import { Refferal } from '../models/refferal.model';

@Injectable()
export class CardService {
  private serviceUrl = 'http://localhost:63273/cards';

  constructor(private http: HttpClient) { }

  getCardByPatientsId(id: any): Observable<Card> {
    return this.http.get(this.serviceUrl + '/patient/' + id).map(
      (res) => res['card']);
  }

  addTherapyForPatient(therapy: any, id: any): Observable<Therapy> {
    return this.http.post<Therapy>(this.serviceUrl + '/patient/' + id + '/add-therapy', therapy);
  }

  addPrescriptionForPatient(prescription: any, id: any): Observable<Prescription> {
    return this.http.post<Prescription>(this.serviceUrl + '/patient/' + id + '/add-prescription', prescription);
  }

  addRefferalForPatient(refferal: any, id: any): Observable<Refferal> {
    return this.http.post<Refferal>(this.serviceUrl + '/patient/' + id + '/add-refferal', refferal);
  }




}