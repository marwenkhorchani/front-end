 import { Component,ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
 import {  EventSettingsModel,ScheduleComponent, EventClickArgs,ActionEventArgs,DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
 import { ScheduleService } from '../../services/schedule.service';



 @Component({
   selector: 'app-schedule',
    template: `<ejs-schedule #scheduleObj width='100%' height='550px' [readonly]=read (actionBegin)="onActionBegin($event)" [views]='views' [eventSettings]='eventSettings'></ejs-schedule>`,
     
   styleUrls: ['./schedule.component.scss']
 })
 export class ScheduleComponent1 implements OnInit {
   result :any=[]
   array:any=[]
   user:string="admin"
   read:boolean=false
   @ViewChild("scheduleObj", { static: true })
   public scheduleObj: ScheduleComponent;
   public views: Array<string> = ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'];
   public eventSettings: EventSettingsModel={}
   public data: any = []
   constructor( private scheduleService: ScheduleService) {}

   onActionBegin(args: ActionEventArgs) {   
    console.log(args.requestType)
    if (args.requestType === "eventCreate") {
            let eventData: any = args.data;
      this.scheduleService.addService(eventData).subscribe((data)=>{
        console.log(data)
        this.scheduleService.getService().subscribe((data)=>{
          this.result=data
          // this.result=this.array.filter((data:any)=>{
          //   return data.Description==="class3"
          // })
          this.eventSettings= {
           dataSource: this.result, 
        }
         })
      })

  }else if(args.requestType==="eventRemove"){
  let id=this.scheduleObj.activeEventData.event._id
    // console.log(console.log(this.scheduleObj.eventsData[0]._id))
      
    this.scheduleService.deleteService(id).subscribe((data)=>{
      console.log(data)
      this.scheduleService.getService().subscribe((data)=>{
        this.result=data
        // this.result=this.array.filter((data:any)=>{
        //   return data.Description==="class3"
        // })
        this.eventSettings= {
         dataSource: this.result,
      }
       })
    })
  }else if(args.requestType==="eventChange") {
    console.log(args.data)

    console.log(args.requestType)
    let id=this.scheduleObj.activeEventData.event._id
    var newevent=args.data

   this.scheduleService.updateService(id,newevent).subscribe((data)=>{

     console.log(data)
     this.scheduleService.getService().subscribe((data)=>{
      this.result=data
      // this.result=this.array.filter((data:any)=>{
      //   return data.Description==="class3"
      // })
      this.eventSettings= {
       dataSource: this.result,
    }
     })
   })
  }

}


  ngOnInit(): void {
  if (this.user=='admin'){
      this.read=true
  }
         this.scheduleService.getService().subscribe((data)=>{
           console.log("data",data)
           this.result=data
            // this.result=this.array.filter((data:any)=>{
            //   return data.Description==="class3"
            // })
            this.eventSettings= {
             dataSource: this.result,
          }
      })
 

}
 }
