import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';


const ELEMENT_DATA: PatientElement[] = [
  { id: 1, firstname: 'Milos', lastname: 'Milosevic', lbo: 'He', phone: '060555888', adress: '', email: 'He' },
  { id: 2, firstname: 'Ana', lastname: 'Ilic', lbo: 'He', phone: '062114477', adress: '', email: 'He' },
  { id: 3, firstname: 'Nikola', lastname: 'Nikolic', lbo: 'He', phone: '064787878', adress: '', email: 'He' },
  { id: 4, firstname: 'Goran', lastname: 'Zikic', lbo: 'He', phone: '065123456', adress: '', email: 'He' },
  { id: 5, firstname: 'Milos', lastname: 'Simic', lbo: 'He', phone: '061999380', adress: '', email: 'He' },
  { id: 6, firstname: 'Ilija', lastname: 'Jovanovic', lbo: 'He', phone: '063717558', adress: '', email: 'He' },
  { id: 7, firstname: 'Dunja', lastname: 'Savic', lbo: 'He', phone: '062785643', adress: '', email: 'He' },
  { id: 8, firstname: 'Petar', lastname: 'Petrovic', lbo: 'He', phone: '060987654', adress: '', email: 'He' },
  { id: 9, firstname: 'Lazar', lastname: 'Ristic', lbo: 'He', phone: '062222157', adress: '', email: 'He' },
  { id: 10, firstname: 'Sinisa', lastname: 'Milic', lbo: 'He', phone: '065515230', adress: '', email: 'He' },
  { id: 11, firstname: 'Jelena', lastname: 'Zugic', lbo: 'He', phone: '064000777', adress: '', email: 'He' },
  { id: 12, firstname: 'Marija', lastname: 'Tomic', lbo: 'He', phone: '062121274', adress: '', email: 'He' },
  { id: 13, firstname: 'Sara', lastname: 'Ristic', lbo: 'He', phone: '065325648', adress: '', email: 'He' },
  { id: 14, firstname: 'Dragan', lastname: 'Pejic', lbo: 'He', phone: '061171518', adress: '', email: 'He' },
  { id: 15, firstname: 'Mirko', lastname: 'Milosic', lbo: 'He', phone: '060555333', adress: '', email: 'He' },
  { id: 16, firstname: 'Veljko', lastname: 'Delic', lbo: 'He', phone: '064456821', adress: '', email: 'He' },
  { id: 17, firstname: 'Vanja', lastname: 'Mikic', lbo: 'He', phone: '063333555', adress: '', email: 'He' },
  { id: 18, firstname: 'Sandra', lastname: 'Salic', lbo: 'He', phone: '064121333', adress: '', email: 'He' },
  { id: 19, firstname: 'Hristina', lastname: 'Popovic', lbo: 'He', phone: '062998877', adress: '', email: 'He' },
  { id: 20, firstname: 'Danilo', lastname: 'Kimic', lbo: 'He', phone: '0604888532', adress: '', email: 'He' },
];



@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'lbo', 'phone', 'adress', 'email', 'actions'];
  dataSource = new MatTableDataSource<PatientElement>(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }



  constructor() { }

}

export interface PatientElement {
  id: number;
  firstname: string;
  lastname: string;
  lbo: string;
  phone: string;
  adress: string;
  email: string;
}
