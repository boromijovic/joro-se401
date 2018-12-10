import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
/* Doctor */
import { PatientsDoctorComponent } from './doctor/patients-doctor/patients-doctor.component';
import { PatientInfoComponent } from './doctor/patient-info/patient-info.component';
import { PatientExamComponent } from './doctor/patient-exam/patient-exam.component';
import { PatientPrescriptionComponent } from './doctor/patient-prescription/patient-prescription.component';
import { PatientRefferalComponent } from './doctor/patient-refferal/patient-refferal.component';
import { PatientAddComponent } from './nurse/patient-add/patient-add.component';
import { PatientsComponent } from './patients/patients.component';
import { StandardsComponent } from './standards/standards.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {
  AuthGuardService as AuthGuard
} from './service/auth-guard.service';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'patients', component: PatientsDoctorComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'doctor'
    }
  },
  {
    path: 'all-patients', component: PatientsComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'nurse'
    }
  },
  { path: 'standards', component: StandardsComponent },
  { path: 'third-page', component: ThirdPageComponent },
  { path: 'patient/:id', component: PatientInfoComponent },
  {
    path: 'patient/:id/exam', component: PatientExamComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'doctor'
    }
  },
  {
    path: 'patient/:id/prescription', component: PatientPrescriptionComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'doctor'
    }
  },
  {
    path: 'patient/:id/refferal', component: PatientRefferalComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'doctor'
    }
  },
  {
    path: 'add-patient', component: PatientAddComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'nurse'
    }
  },
  { path: '', component: AppComponent },
  { path: 'login', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
