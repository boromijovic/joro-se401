import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Card } from "../../app/models/card.model";

@Injectable()
export class CardService {
  private serviceUrl = 'http://localhost:63273/cards';

  constructor(private http: HttpClient) { }

  getCardByPatientsId(id: any): Observable<Card> {
    return this.http.get(this.serviceUrl + '/patient/' + id).map(
      (res) => res['card']);
  }
}