import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from '../services/student.service';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  student = {
    img: undefined,
    username: undefined,
    parssword: undefined,
    firstname: undefined,
    lastname: undefined,
    cin: undefined,
    birthday: undefined,
    phone: undefined,
    email: undefined,
  };
  constructor(
    public dialog: MatDialog,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    let stu = JSON.parse(localStorage.getItem('user') || '');
    this.getStudent(stu._id);
  }
  openStudentDialog(data?: any): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '700px',
      height: '700px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  getStudent(id: any) {
    this.studentService.getStudentById(id).subscribe((value) => {
      this.student = value;
    });
  }
}
