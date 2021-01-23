import {Component, OnInit} from '@angular/core';
import {TeacherService} from '../services/teacher.service';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss'],
})
export class TeacherViewComponent implements OnInit {
  teacher = {};
  classes = [{name: undefined, student: undefined}];

  constructor(private teacherService: TeacherService) {
  }

  ngOnInit(): void {
    let teacher = JSON.parse(localStorage.getItem('user') || "");
    console.log(teacher);
    this.getTeacher(teacher._id);
    console.log('teacher', this.teacher);
    console.log('classes', this.classes);
  }

  getTeacher(id: any) {
    this.teacherService.getTeacherById(id).subscribe((value) => {
      this.teacher = value;
      this.classes = [];
      value.classes.forEach((e: any) => {
        // @ts-ignore
        this.teacherService.getClassesById(e._id).subscribe((value1) => {
          // @ts-ignore
          this.classes.push(value1);
        });
      });
    });
  }
}
