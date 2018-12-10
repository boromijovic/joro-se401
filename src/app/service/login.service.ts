import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LoginCommand } from "../../app/models/logincommand.model";
import { LoginResult } from "../../app/models/loginresult.model";

@Injectable()
export class LoginService {
    private serviceUrl = 'http://localhost:63273/authentication/login';

    constructor(private http: HttpClient) { }

    login(loginCommand: LoginCommand): Observable<LoginResult> {
        return this.http.post<LoginResult>(this.serviceUrl, loginCommand);
    }
}