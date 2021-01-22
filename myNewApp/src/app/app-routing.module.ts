import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';

const routes: Routes = [
  { path: 'admin-view', component: AdminViewComponent },
  { path: 'student-profile', component: StudentProfileComponent },
  { path: 'teacher-view', component: TeacherViewComponent },
  { path: 'teacher-profile', component: TeacherProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar-admin', component: NavbarAdminComponent },
  { path: 'navbar-student', component: NavbarStudentComponent },
  { path: 'navbar-teacher', component: NavbarTeacherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
