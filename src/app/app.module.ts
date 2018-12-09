import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatChipsModule,
  MatDividerModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule
} from '@angular/material';
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
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
/* Services */
import { PatientService } from './service/patient.service';
import { CardService } from './service/card.service';
// /*         */
// const appRoutes: Routes = [
//   { path: 'patients', component: PatientsDoctorComponent },
//   { path: 'first-page', component: FirstPageComponent },
//   { path: 'second-page', component: SecondPageComponent },
//   { path: 'third-page', component: ThirdPageComponent },
//   { path: 'patient/:id', component: PatientInfoComponent },
//   { path: 'patient/:id/exam', component: PatientExamComponent },
//   { path: 'patient/:id/prescription', component: PatientPrescriptionComponent },
//   { path: 'patient/:id/refferal', component: PatientRefferalComponent },
//   { path: 'add-patient', component: PatientAddComponent },
//   // { path: '', component: LoginPageComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    NameComponent,
    PatientsDoctorComponent,
    PatientInfoComponent,
    PatientAddComponent,
    // LoginPageComponent,
    PatientExamComponent,
    PatientPrescriptionComponent,
    PatientRefferalComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent
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
  providers: [PatientService, CardService],
  bootstrap: [AppComponent]
}
)
export class AppModule {
}
