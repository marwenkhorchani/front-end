import { Component, OnInit } from '@angular/core';
import {dummyData} from './dummydata';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-allschedules',
  templateUrl: './allschedules.component.html',
  styleUrls: ['./allschedules.component.scss']
})
export class AllschedulesComponent implements OnInit {
   classes:any=[]
   admin:any
   student:any
   teacher:any
  constructor( private router: Router,
    private activateroute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.classes=dummyData
    this.admin=localStorage.getItem('admin')
    this.student=localStorage.getItem('student')
    this.teacher=localStorage.getItem('teacher')
  }
  getschedule(query:any){
    this.router.navigate(['/schedule', query]).then(() => {
      location.reload();
    });
  }

}
