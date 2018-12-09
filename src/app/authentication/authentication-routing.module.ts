import { LoginPageComponent } from './login-page/login-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: '', component: LoginPageComponent }, // default route of the module
    { path: 'login', component: LoginPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);