import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleModule, RecurrenceEditorModule ,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent1 } from './components/schedule/schedule.component';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';
import { EventsComponent } from './event/events/events.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharkDirective } from './shark.directive';
import { AllschedulesComponent } from './components/allschedules/allschedules.component';
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent1,
    SharkDirective,
    AllschedulesComponent,
    ListOfStudentComponent,
    EventsComponent,
    LoginComponent,
    NavbarAdminComponent,
    NavbarStudentComponent,
    NavbarTeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule, RecurrenceEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService,{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
