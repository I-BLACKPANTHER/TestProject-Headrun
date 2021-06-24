import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})

export class StudentdetailsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'fname', 'lname','email', 'phone', 'school'];
  dataSource = new MatTableDataSource<StudentDetails>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator:any = MatPaginator; 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface StudentDetails {
  id:number,
  fname: string;
  lname: string;
  email: string;
  phone: number;
  school: string;
}

const ELEMENT_DATA: StudentDetails[] = [
  {id: 1, fname: 'Sree', lname: 'Vatsa', email: 'sistlasreevatsa@gmail.com', phone:7386759665, school: 'Sri Chaitanya Techno School'},
  {id: 2, fname: 'Sree', lname: 'Vaishnav', email: 'sistlasreevatsa@gmail.com', phone:7386759665, school: 'Sri Chaitanya Techno School'},
  {id: 3, fname: 'Bala', lname: 'Ganesh', email: 'balaganesh@headrun.com', phone:7386759665, school: 'Sri Chaitanya Techno School'},
  {id: 4, fname: 'Ravi', lname: 'Chandra', email: 'ravichandra@headrun.com', phone:7386759665, school: 'Sri Chaitanya Techno School'},
  {id: 5, fname: 'Ravi', lname: 'Prasad', email: 'raviprasad@gmail.com', phone:7386759665, school: 'Sri Chaitanya Techno School'},
  {id: 6, fname: 'Mohan', lname: 'Kumar', email: 'mohankumar@gmail.com', phone:7386759665, school: 'Sri Chaitanya Techno School'},
  {id: 7, fname: 'Pawan', lname: 'Kalyan', email: 'pawankalyan@gmail.com', phone:7386759665, school: 'Sri Chaitanya Techno School'},
  {id: 8, fname: 'Bala', lname: 'Krishna', email: 'balakrishna@gmail.com', phone:7386759665, school: 'Sri Chaitanya Techno School'},
  {id: 9, fname: 'Mahesh', lname: 'Babu', email: 'maheshbabu@gmail.com', phone:7386759665, school: 'Sri Chaitanya Techno School'},
  {id: 10, fname: 'Sai', lname: 'Kumar', email: 'saikumar@gmail.com', phone:7386759665, school: 'Sri Chaitanya Techno School'},
  {id: 11, fname: 'Raju', lname: 'Nani', email: 'rajunani@gmail.com', phone:7386759665, school: 'Narayana Techno School'},
  {id: 12, fname: 'Vijay', lname: 'Kumar', email: 'vijaykumar@gmail.com', phone:7386759665, school: 'Narayana Techno School'},
  {id: 13, fname: 'Mohan', lname: 'Vendra', email: 'mohanvendra@gmail.com', phone:7386759665, school: 'Narayana Techno School'},
  {id: 14, fname: 'Jeevan', lname: 'Ambati', email: 'jeevanambati@gmail.com', phone:7386759665, school: ' Govt High School'},
  {id: 15, fname: 'Bharath', lname: 'Kumar', email: 'bharathkumar@gmail.com', phone:7386759665, school: 'Govt High School'},
  {id: 16, fname: 'Bhanu', lname: 'Kumar', email: 'bhanukumar@gmail.com', phone:7386759665, school: 'Govt High School'},
  {id: 17, fname: 'Yeswanth', lname: 'Rao', email: 'yeswathrao@gmail.com', phone:7386759665, school: 'Govt High School'},
  {id: 18, fname: 'Ranjith', lname: 'Raman', email: 'ranjithraman@gmail.com', phone:7386759665, school: 'Govt High School'},
  {id: 19, fname: 'Vinay', lname: 'Kumar', email: 'vinaykumar@gmail.com', phone:7386759665, school: 'Gowtham Model School'},
  {id: 20, fname: 'Madhu', lname: 'Pampana', email: 'madhupampana@gmail.com', phone:7386759665, school: 'Gowtham Model School'},


];


