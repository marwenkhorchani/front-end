import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AddCourseService } from '../../add-course.service';




@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  addCourseForm: any ;

  constructor(private router: Router,
    private service: AddCourseService
    ) {
      this.addCourseForm = new FormGroup({
        title: new FormControl(null, Validators.required),
        lecture: new FormControl(null, Validators.required),
        homework: new FormControl(null, Validators.required),
      });
     }
     ngOnInit(): void {}
     addCourse(){
       let obj={title:this.addCourseForm.value.title,lecture:this.addCourseForm.value.lecture,
        homework : this.addCourseForm.value.homework};
      this.service
      .addService(obj)
      
     }



}
