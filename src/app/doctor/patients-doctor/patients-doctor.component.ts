import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../../models/patient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients-doctor',
  templateUrl: './patients-doctor.component.html',
  styleUrls: ['./patients-doctor.component.css']
})
export class PatientsDoctorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'lbo', 'phone', 'adress', 'email', 'actions'];
  dataSource = new MatTableDataSource<Patient>();

  constructor(
    private patientsService: PatientService,
    private router: Router) { }

  ngOnInit() {
    this.patientsService.getPatients().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public patientDetails(id: any) {
    this.router.navigate(['patient', id]);
  }
}