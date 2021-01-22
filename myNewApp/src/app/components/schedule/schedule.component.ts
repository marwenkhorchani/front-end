import { Component,ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { ScheduleComponent, CurrentAction, EventSettingsModel, EventClickArgs,ActionEventArgs,DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
// import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
// import { scheduleData } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { scheduleData } from './datasource';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { ScheduleService } from '../../services/schedule.service';



@Component({
  selector: 'app-schedule',
  template:`<ejs-schedule  #scheduleObj [readonly]="readonly" width='100%' height='550px' [eventSettings]="eventSettings"
  (popupOpen)="onPopupOpen($event)" (actionBegin)="onActionBegin($event)">

  <!-- Header template -->
  <ng-template #quickInfoTemplatesHeader let-data>
    <div *ngIf="data.elementType == 'cell' || data.elementType == 'event'">
      <div class="e-popup-header">
        <div class="e-header-icon-wrapper">
          <div *ngIf="data.elementType == 'event'" class="subject">{{data.Subject}}</div>
          <button class="e-close e-close-icon e-icons" title="Close" (click)="onCloseClick($event)"></button>
        </div>
      </div>
    </div>
  </ng-template>

  <!-- Content Template -->
  <ng-template #editorTemplate>
        <table class="custom-event-editor" width="100%" cellpadding="5">
            <tbody>
                <tr>
                    <td class="e-textlabel">Subject</td>
                    <td colspan="4">
                        <input id="Subject" class="e-field e-input" type="text" value="{{data.Subject}}" data-name="Subject" style="width: 100%" />
                    </td>
                </tr>
              
                <tr>
                    <td class="e-textlabel">From</td>
                    <td colspan="4">
                        <ejs-DateTimePicker id="StartTime" class="e-field" format="M/dd/yy h:mm a"  [value]="dateParser(data.startTime||data.StartTime)" type="text" data-name="StartTime" ></ejs-DateTimePicker>
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">To</td>
                    <td colspan="4">
                        <ejs-DateTimePicker id="EndTime" format="M/dd/yy h:mm a" class="e-field" [value]="dateParser(data.EndTime||data.endTime)" type="text" data-name="EndTime" ></ejs-DateTimePicker>
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">Class</td>
                    <td colspan="4">
                    <input id="Class" class="e-field e-input" value="{{data.Class}}" type="text" data-name="Class" />
                    </td>
                </tr>
            </tbody>
        </table>
    </ng-template>
  <!-- Footer Template -->
  <ng-template #quickInfoTemplatesFooter let-data>
    <div *ngIf="data.elementType == 'cell'" class="e-cell-footer">
      <div class="left-button">
        <button class="e-event-details" title="Extra Details" (click)="onDetailsClick($event)">More Details</button>
      </div>
      <div class="right-button">
        <button class="e-event-create" title="Add" (click)="onAddClick($event)">Add</button>
      </div>
    </div>
    <div *ngIf="data.elementType == 'event'" class="e-event-footer">
      <div class="left-button">
        <button class="e-delete" title="Delete" (click)="onDeleteClick($event)">Delete</button>
        <button *ngIf="data.RecurrenceRule != undefined && data.RecurrenceRule != ''" class="e-delete-series"
          title="Delete" (click)="onDeleteClick($event)">Delete Series</button>
      </div>
      <div class="right-button">
        <button class="e-edit" title="Edit" (click)="onEditClick($event)">Edit</button>
        <button *ngIf="data.RecurrenceRule != undefined && data.RecurrenceRule != ''" class="e-edit-series"
          title="Edit" (click)="onEditClick($event)">Edit Series</button>
      </div>
    </div>
  </ng-template>
</ejs-schedule>`,
  // templateUrl: './schedule.component.html',
  
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent1 implements OnInit {
  result :any=[]
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent
  private selectionTarget: Element;
  public currentAction: CurrentAction;
  constructor( private scheduleService: ScheduleService) {

  }

 public eventSettings: EventSettingsModel={}
  public data: any = []

  public dateParser(data:string){
    return new Date(data);
  }
  public statusFiels:Object={text:"StatusText",value:"statusText"}
  public StatusData:Object[]=[
    {StatusText:"New"},
    {StatusText:"Requested"},
    {StatusText:"Confirmed"}
  ]
  public onPopupOpen(args: PopupOpenEventArgs): void {
    this.selectionTarget = null;
    this.selectionTarget = args.target;
}

onEventClick(args: EventClickArgs): void {
  let event: Object = this.scheduleObj.getEventDetails(args.element);
  this.scheduleService.addService(event).subscribe((data)=>{
             console.log(data)
           })
}
//   onActionBegin(args: ActionEventArgs): void { 
//     if (args.requestType === 'eventChange') { //while editing the existing event 
//         console.log("event edit"); 
//     } 
//     if (args.requestType === 'eventCreate') { //while creating new event 
//       const data: Object = this.scheduleObj.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;
//       const eventData: { [key: string]: Object } = this.scheduleObj.eventWindow.getObjectFromFormData('e-quick-popup-wrapper');
    
//       this.scheduleObj.eventWindow.convertToEventData(data as { [key: string]: Object }, eventData);
//       eventData.Id = this.scheduleObj.eventBase.getEventMaxID() as number + 1;
//       this.scheduleService.addService(eventData).subscribe((data)=>{
//         console.log(data)
//       })
//     }  
// } 
 
  public onDetailsClick(): void {
      this.onCloseClick();
      const data: Object = this.scheduleObj.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;
      this.scheduleObj.openEditor(data, 'Add');
  }
  public onAddClick(event:any): void {
      this.onCloseClick();
      const data: Object = this.scheduleObj.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;
      const eventData: { [key: string]: Object } = this.scheduleObj.eventWindow.getObjectFromFormData('e-quick-popup-wrapper');
      this.scheduleService.addService(eventData).subscribe((data)=>{
        console.log(data)
      })
      this.scheduleObj.eventWindow.convertToEventData(data as { [key: string]: Object }, eventData);
      eventData.Id = this.scheduleObj.eventBase.getEventMaxID() as number + 1;
      this.scheduleObj.addEvent(eventData)
      console.log('eventdata',eventData);
     

  }
  public onEditClick(args: any): void {

      if (this.selectionTarget) {
      let eventData: { [key: string]: Object } = this.scheduleObj.getEventDetails(this.selectionTarget) as { [key: string]: Object };
      let currentAction: CurrentAction = 'Save';
      if (!isNullOrUndefined(eventData.RecurrenceRule) && eventData.RecurrenceRule !== '') {
          if (args.target.classList.contains('e-edit-series')) {
          currentAction = 'EditSeries';
          eventData = this.scheduleObj.eventBase.getParentEvent(eventData, true);
          } else {
          currentAction = 'EditOccurrence';
          }
      }
      this.scheduleObj.openEditor(eventData, currentAction);
      }

  }
  public onDeleteClick(args: any): void {
      this.onCloseClick();
      if (this.selectionTarget) {
      const eventData: { [key: string]: Object } = this.scheduleObj.getEventDetails(this.selectionTarget) as { [key: string]: Object };
      let currentAction: CurrentAction;
      if (!isNullOrUndefined(eventData.RecurrenceRule) && eventData.RecurrenceRule !== '') {
          currentAction = args.target.classList.contains('e-delete-series') ? 'DeleteSeries' : 'DeleteOccurrence';
      }
      this.scheduleObj.deleteEvent(eventData, currentAction);
      }
  }
  public onCloseClick(): void {
      this.scheduleObj.quickPopup.quickPopupHide();
  }

  ngOnInit(): void {
     this.scheduleService.getService().subscribe((data)=>{
       console.log("data",data)
       this.result=data

       this.eventSettings= {
        dataSource: this.result,
        fields: {
          id: 'Id',
          subject: { name: 'Subject', title: 'Event Name' },
          location: { name: 'Location', title: 'Event Location'},
          startTime: { name: 'StartTime', title: 'Start Duration' },
          endTime: { name: 'EndTime', title: 'End Duration'  }
      }
    };
       console.log("result",this.eventSettings.dataSource)

     });
   
console.log('sche',this.scheduleObj)

  }
}

