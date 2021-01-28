import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import {AnnouncementsComponent} from './announcements/announcements.component'
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { AddTeacherDialogComponent } from './add-teacher-dialog/add-teacher-dialog.component';
import { AddAdminDialogComponent } from './add-admin-dialog/add-admin-dialog.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import {
  ScheduleModule,
  RecurrenceEditorModule,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  MonthAgendaService,
} from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent1 } from './components/schedule/schedule.component';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';
import { SharkDirective } from './shark.directive';
import { AllschedulesComponent } from './components/allschedules/allschedules.component';
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';
import { APP_BASE_HREF } from '@angular/common';
import { AllCoursesComponent } from './admin/all-courses/all-courses.component';
import { AddCourseComponent } from './teacher/add-course/add-course/add-course.component';
import { AddeventsComponent } from './event/addevents/addevents.component';
import { EventsComponent } from './event/events/events.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';





@NgModule({
  declarations: [
    AppComponent,
    TeacherViewComponent,
    StudentProfileComponent,
    AdminViewComponent,
    AddDialogComponent,
    InfoDialogComponent,
    AddTeacherDialogComponent,
    AddAdminDialogComponent,
    TableStudentsComponent,
    TeacherProfileComponent,
    ScheduleComponent1,
    SharkDirective,
    AllschedulesComponent,
    ListOfStudentComponent,
    LoginComponent,
    NavbarAdminComponent,
    NavbarStudentComponent,
    NavbarTeacherComponent,
    AnnouncementsComponent,
    AllCoursesComponent,
    AddCourseComponent,
    AddeventsComponent,
    EventsComponent,
    TaskViewComponent,
  
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScheduleModule,
    RecurrenceEditorModule,
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
