import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import {
  EventSettingsModel,
  ScheduleComponent,
  View,
  TimeScaleModel,
  EventClickArgs,
  ActionEventArgs,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  PopupOpenEventArgs,
} from '@syncfusion/ej2-angular-schedule';
import { ScheduleService } from '../../services/schedule.service';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  template: ` <app-navbar-admin *ngIf="role === 'admin'"></app-navbar-admin>
    <app-navbar-student *ngIf="role === 'student'"></app-navbar-student>
    <app-navbar-teacher *ngIf="role === 'teacher'"></app-navbar-teacher>
    <br />
    <ejs-schedule
      #scheduleObj
      width="100%"
      height="550px"
      [currentView]="newViewMode"
      [readonly]="read"
      [views]="views"
      [eventSettings]="eventSettings"
    ></ejs-schedule>`,

  styleUrls: ['./schedule.component.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ScheduleComponent1 implements OnInit {
  result: any = [];
  array: any = [];
  query: any;
  read = false;
  role = localStorage.getItem('role');
  public newViewMode: View = 'Month';

  @ViewChild('scheduleObj', { static: true })
  public scheduleObfitj!: ScheduleComponent;
  public views: Array<string> = [
    'Day',
    'Week',
    'TimelineWeek',
    'Month',
    'Agenda',
  ];
  public eventSettings: EventSettingsModel = {};
  public timeScale: TimeScaleModel = {
    enable: true,
    interval: 60,
    slotCount: 6,
  };
  public data: any = [];
  scheduleObj: any;

  constructor(
    private scheduleService: ScheduleService,
    private activateroute: ActivatedRoute
  ) {}

  onActionBegin(args: ActionEventArgs) {
    console.log(args.requestType);
    if (args.requestType === 'eventCreate') {
      const eventData: any = args.data;
      this.scheduleService.addService(eventData).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:no-shadowed-variable
        this.scheduleService.getService().subscribe((data) => {
          this.array = data;
          // tslint:disable-next-line:no-shadowed-variable
          this.result = this.array.filter((data: any) => {
            return data.Description === this.query;
          });
          this.eventSettings = {
            dataSource: this.result,
          };
        });
      });
    } else if (args.requestType === 'eventRemove') {
      // @ts-ignore
      const id = this.scheduleObj.activeEventData.event._id;
      // console.log(console.log(this.scheduleObj.eventsData[0]._id))

      this.scheduleService.deleteService(id).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:no-shadowed-variable
        this.scheduleService.getService().subscribe((data) => {
          this.array = data;
          // tslint:disable-next-line:no-shadowed-variable
          this.result = this.array.filter((data: any) => {
            return data.Description === this.query;
          });
          this.eventSettings = {
            dataSource: this.result,
          };
        });
      });
    } else if (args.requestType === 'eventChange') {
      console.log(args.data);

      console.log(args.requestType);
      const item = this.scheduleObj .activeEventData.event;
      // @ts-ignore
      const id = item._id;
      // tslint:disable-next-line:prefer-const
      let newevent = args.data;

      this.scheduleService.updateService(id, newevent).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:no-shadowed-variable
        this.scheduleService.getService().subscribe((data) => {
          this.array = data;
          // tslint:disable-next-line:no-shadowed-variable
          this.result = this.array.filter((data: any) => {
            return data.Description === this.query;
          });
          this.eventSettings = {
            dataSource: this.result,
          };
        });
      });
    }
  }

  ngOnInit(): void {
    this.query = this.activateroute.snapshot.params.query;

    if (this.role !== 'admin') {
      this.read = true;
    }
    this.scheduleService.getService().subscribe((data) => {
      console.log('data', data);
      this.array = data;
      // tslint:disable-next-line:no-shadowed-variable
      this.result = this.array.filter((data: any) => {
        return data.Description === this.query;
      });
      this.eventSettings = {
        dataSource: this.result,
      };
    });
  }
}
