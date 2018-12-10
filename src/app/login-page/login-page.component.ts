import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: any;
  @Output() em: EventEmitter<any> = new EventEmitter();


  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.initUserModel();
  }

  initUserModel() {
    this.user = {
      username: "",
      password: ""
    }
  }

  public login() {
    this.loginService.login(this.user).subscribe(
      (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userType", data.userType);
        localStorage.setItem("username", data.user);

        this.authService.toggleLoginForm();
        if (data.userType === 'doctor') {
          this.authService.toggleDoctor();
          this.router.navigate(['patients']);
        } else {
          this.authService.toggleNurse();
          this.router.navigate(['all-patients']);
        }
      }
    );
  }
}