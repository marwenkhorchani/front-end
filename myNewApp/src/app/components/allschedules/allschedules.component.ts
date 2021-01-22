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
   
  constructor( private router: Router,
    private activateroute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.classes=dummyData
  }
  getschedule(query:any){
    this.router.navigate(['/schedule', query]).then(() => {
      location.reload();
    });
  }

}
