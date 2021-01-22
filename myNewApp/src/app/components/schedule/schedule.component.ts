 import { Component,ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
 import {  EventSettingsModel,ScheduleComponent, EventClickArgs,ActionEventArgs,DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
 import { ScheduleService } from '../../services/schedule.service';

 import { Router } from '@angular/router';
 import { ActivatedRoute } from '@angular/router';

 @Component({
   selector: 'app-schedule',
    template: `<ejs-schedule #scheduleObj width='100%' height='550px' [readonly]=read (actionBegin)="onActionBegin($event)" [views]='views' [eventSettings]='eventSettings'></ejs-schedule>`,
     
   styleUrls: ['./schedule.component.scss']
 })
 export class ScheduleComponent1 implements OnInit {
   result :any=[]
   array:any=[]
   query:any 
   user:string="admin"
   read:boolean=false
   @ViewChild("scheduleObj", { static: true })
   public scheduleObj: ScheduleComponent;
   public views: Array<string> = ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'];
   public eventSettings: EventSettingsModel={}
   public data: any = []
   constructor( private scheduleService: ScheduleService, private router: Router,
    private activateroute: ActivatedRoute,) {}

   onActionBegin(args: ActionEventArgs) {   
    console.log(args.requestType)
    if (args.requestType === "eventCreate") {
            let eventData: any = args.data;
      this.scheduleService.addService(eventData).subscribe((data)=>{
        console.log(data)
        this.scheduleService.getService().subscribe((data)=>{
          this.result=data
          this.result=this.array.filter((data:any)=>{
            return data.Description===this.query
          })
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
        this.array=data
        this.result=this.array.filter((data:any)=>{
          return data.Description===this.query
        })
        this.eventSettings= {
         dataSource: this.result,
      }
       })
    })
  }else if(args.requestType==="eventChange") {
    console.log(args.data)

    console.log(args.requestType)
    var item=this.scheduleObj.activeEventData.event
    let id=item._id  
    var newevent=args.data
 
   this.scheduleService.updateService(id,newevent).subscribe((data)=>{

     console.log(data)
     this.scheduleService.getService().subscribe((data)=>{
      this.array=data
      this.result=this.array.filter((data:any)=>{
        return data.Description===this.query
      })
      this.eventSettings= {
       dataSource: this.result,
    }
     })
   })
  }

}


  ngOnInit(): void {
    this.query = this.activateroute.snapshot.params.query;

  if (this.user !=='admin'){
      this.read=true
  }
         this.scheduleService.getService().subscribe((data)=>{
           console.log("data",data)
           this.array=data
            this.result=this.array.filter((data:any)=>{
              return data.Description===this.query
            })
            this.eventSettings= {
             dataSource: this.result,
          }
      })
 

}
 }
