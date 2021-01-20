import { Component, OnInit } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
@Component({
  selector: 'app-schedule',
  template: `<ejs-schedule
    style="height:850;width:1250"
    [eventSettings]="eventObject"
    [currentView]="setView"
    [selectedDate]="setDate"
  >
  </ejs-schedule>`,
  // templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  public setView: View = 'Week';
  public setDate: Date = new Date();
  private eventData: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/loadData',
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });
  public eventObject: EventSettingsModel = {
    dataSource: this.eventData,
    //    dataSource:[{
    //      Subject:"Testing",
    //      StartTime:new Date(2021,0,20,4,0),
    //      EndTime:new Date(2021,0,20,6,0),
    //     //  IsReadonly:true,
    //      IsBlock:true
    //   }]
  };
  constructor() {}

  ngOnInit(): void {}
}
