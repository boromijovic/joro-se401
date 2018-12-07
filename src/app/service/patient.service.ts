
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Patient } from "../../app/models/patient.model";

@Injectable()
export class PatientService {
  private serviceUrl = 'http://localhost:63273/patients';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get(this.serviceUrl).map(
      (res ) =>  res['pacijenti']);
  }
  
  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.serviceUrl, patient);
  }
}