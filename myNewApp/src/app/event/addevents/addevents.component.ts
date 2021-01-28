import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.scss']
})
export class AddeventsComponent implements OnInit {
  acitvityName: any = '';
  description: any = '';
  date: any = '';
  hour: any = '';
  events: any = [];
  constructor(private router: Router, private service: EventsService) {
    this.getEvents()
   }

  addEvent() {
    console.log(this.acitvityName)
    this.service.addEvent(this.acitvityName, this.description, this.date, this.hour).subscribe((res) => {
      console.log(res);
    });
  }

  getEvents() {
    this.service
      .getEvents(this.acitvityName, this.description, this.date, this.hour)
      .subscribe((response: any) => {
        this.events = response;
        console.log(this.events)
        
      });
  }

  ngOnInit(): void {
  }

}