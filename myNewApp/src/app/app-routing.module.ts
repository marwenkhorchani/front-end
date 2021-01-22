import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';

import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

const routes: Routes = [
  { path: 'announcements', component: AnnouncementsComponent },
  { path: '', component: LoginComponent },

  {
    path: 'admin',
    component: NavbarAdminComponent,
  },
  {
    path: 'admin/listgrades',
    component: ListOfStudentComponent,
  },
  {
    path: 'student',
    component: NavbarStudentComponent,
  },
  {
    path: 'student/listgrades',
    component: ListOfStudentComponent,
  },
  {
    path: 'teacher',
    component: NavbarTeacherComponent,
  },
  {
    path: 'teacher/listgrades',
    component: ListOfStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
