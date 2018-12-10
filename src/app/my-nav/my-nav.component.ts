import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css'],
})
export class MyNavComponent implements OnInit {
  @Input() title: string;

  isDoctor = false;
  isNurse = false;
  isLoggedIn = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService) {

  }

  logout() {
    if (localStorage.getItem('userType') === 'doctor') {
      this.authService.toggleDoctor();
    } else if (localStorage.getItem('userType') === 'nurse') {
      this.authService.toggleNurse();
    }
    this.authService.toggleLoginForm();
    localStorage.clear();
    this.router.navigate(['']);
  }
  ngOnInit() {
    this.authService.doctor.subscribe(isDoctor => {
      this.isDoctor = isDoctor;
    });
    this.authService.nurse.subscribe(isNurse => {
      this.isNurse = isNurse;
    });
  }
}