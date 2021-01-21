import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListOfStudentsService } from '../services/list-of-students.service';
import 
@Component({
  selector: 'app-list-of-student',
  templateUrl: './list-of-student.component.html',
  styleUrls: ['./list-of-student.component.scss'],
})
export class ListOfStudentComponent implements OnInit {

  allStudents: any=[];

  constructor(private router: Router, private service: ListOfStudentsService) {
    this.loadAllStudents();
  }

  loadAllStudents() {
    this.service.getAllStudents().subscribe((response: any) => {
      this.allStudents = response
      
    });
  }
  
  allStudentsSort(){
    this.allStudents
  }

  ngOnInit(): void {}
}
