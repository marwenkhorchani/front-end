import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { AddTeacherDialogComponent } from './add-teacher-dialog/add-teacher-dialog.component';
import { AddAdminDialogComponent } from './add-admin-dialog/add-admin-dialog.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';

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
    LoginComponent,
    NavbarAdminComponent,
    NavbarStudentComponent,
    NavbarTeacherComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
