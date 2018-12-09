import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Doctor */
import { PatientsDoctorComponent } from './doctor/patients-doctor/patients-doctor.component';
import { PatientInfoComponent } from './doctor/patient-info/patient-info.component';
import { PatientExamComponent } from './doctor/patient-exam/patient-exam.component';
import { PatientPrescriptionComponent } from './doctor/patient-prescription/patient-prescription.component';
import { PatientRefferalComponent } from './doctor/patient-refferal/patient-refferal.component';
import { PatientAddComponent } from './nurse/patient-add/patient-add.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

const routes: Routes = [
  { path: 'patients', component: PatientsDoctorComponent },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
  { path: 'patient/:id', component: PatientInfoComponent },
  { path: 'patient/:id/exam', component: PatientExamComponent },
  { path: 'patient/:id/prescription', component: PatientPrescriptionComponent },
  { path: 'patient/:id/refferal', component: PatientRefferalComponent },
  { path: 'add-patient', component: PatientAddComponent },
  { path: '', loadChildren: './authentication/authentication.module#AuthenticationModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
