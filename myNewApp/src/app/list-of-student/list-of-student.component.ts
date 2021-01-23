import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListOfStudentsService } from '../services/list-of-students.service';

@Component({
  selector: 'app-list-of-student',
  templateUrl: './list-of-student.component.html',
  styleUrls: ['./list-of-student.component.scss'],
})
export class ListOfStudentComponent implements OnInit {
  arr: any = ['Frist Best Grade', 'Second Best Grade', 'Third Best Grade'];
  allStudentsGrates: any = [];
  podium: any = [];
  role = localStorage.getItem('role') || '';
  constructor(private router: Router, private service: ListOfStudentsService) {
    // this.loadAllStudents();
    this.loadAlldammydata();
    this.podiumStudent();
  }

  loadAllStudents() {
    this.service.getAllStudents().subscribe((response: any) => {
      this.allStudentsGrates = response.sort(
        (a: any, b: any) => b.grade - a.grade
      );
    });
  }

  loadAlldammydata() {
    this.allStudentsGrates = this.service.students.sort(
      (a, b) => b.grade - a.grade
    );
    console.log(this.allStudentsGrates);
  }

  podiumStudent() {
    for (var i = 0; i < this.allStudentsGrates.length; i++) {
      if (i <= 2) {
        this.podium.push(this.allStudentsGrates[i]);
      }
    }
    console.log(this.podium);
  }

  ngOnInit(): void {}
}
