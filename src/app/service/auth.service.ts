import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class AuthService {
    static loggedIn = false;
    static title = "";
    isDoctor = false;
    isNurse = false;
    isLogged = false;

    @Output() doctor: EventEmitter<boolean> = new EventEmitter();
    @Output() nurse: EventEmitter<boolean> = new EventEmitter();
    @Output() logged: EventEmitter<boolean> = new EventEmitter();

    toggleDoctor() {
        this.isDoctor = !this.isDoctor;
        this.doctor.emit(this.isDoctor);
    }
    toggleNurse() {
        this.isNurse = !this.isNurse;
        this.nurse.emit(this.isNurse);
    }
    toggleLoginForm() {
        this.isLogged = !this.isLogged;
        this.logged.emit(this.isLogged);
    }
    constructor() { }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        if (token !== null) {
            return true;
        } else
            return false;
    }

    public isAuthUserRole(expectedRole: string): boolean {
        const userRole = localStorage.getItem('userType');

        if (userRole === expectedRole) {
            return true;
        } else
            return false;
    }
}