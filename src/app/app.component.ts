import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projekat';
  isLogged = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logged.subscribe(isLogged => {
      this.isLogged = isLogged;
    });
  }
}
