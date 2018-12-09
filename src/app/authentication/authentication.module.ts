import { LoginPageComponent } from './login-page/login-page.component';
import { routing } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        AuthenticationComponent,
        LoginPageComponent,
    ],
    exports: [
    ]
})
export class AuthenticationModule { }