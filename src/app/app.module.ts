import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { LoginPageComponent } from './login-page/login-page.component';
import { AppMaterialModule } from './app-material/app-material.module';
/* Material */
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatChipsModule,
  MatDividerModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule
} from '@angular/material';
/* */
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { NameComponent } from './name/name.component';
import { RouterModule, Routes } from '@angular/router';
/* Doctor */
import { PatientsDoctorComponent } from './doctor/patients-doctor/patients-doctor.component';
import { PatientInfoComponent } from './doctor/patient-info/patient-info.component';
import { PatientExamComponent } from './doctor/patient-exam/patient-exam.component';
import { PatientPrescriptionComponent } from './doctor/patient-prescription/patient-prescription.component';
import { PatientRefferalComponent } from './doctor/patient-refferal/patient-refferal.component';
/*    Authentication    */
// import { AuthenticationModule } from './authentication/authentication.module';
/*        */
import { PatientAddComponent } from './nurse/patient-add/patient-add.component';
import { PatientsComponent } from './patients/patients.component';
import { StandardsComponent } from './standards/standards.component';
import { ThirdPageComponent } from './third-page/third-page.component';
/* Services */
import { PatientService } from './service/patient.service';
import { CardService } from './service/card.service';
import { LoginService } from './service/login.service';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    NameComponent,
    PatientsDoctorComponent,
    PatientInfoComponent,
    PatientAddComponent,
    PatientExamComponent,
    PatientPrescriptionComponent,
    PatientRefferalComponent,
    PatientsComponent,
    StandardsComponent,
    ThirdPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    // RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    FormsModule,
    // AuthenticationModule
  ],

  exports: [
    MatFormFieldModule,
  ],
  providers: [PatientService, CardService, LoginService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
}
)
export class AppModule {
}
