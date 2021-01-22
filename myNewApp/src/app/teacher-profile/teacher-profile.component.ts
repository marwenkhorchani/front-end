import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTeacherDialogComponent } from '../add-teacher-dialog/add-teacher-dialog.component';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss'],
})
export class TeacherProfileComponent implements OnInit {
  teacher = {
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
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.getTeacher('6009cd50b4ac7f6168b208bb');
  }
  openTeacherDialog(data?: any): void {
    const dialogRef = this.dialog.open(AddTeacherDialogComponent, {
      width: '700px',
      height: '700px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  getTeacher(id: any) {
    this.teacherService.getTeacherById(id).subscribe((value) => {
      this.teacher = value;
    });
  }
}
