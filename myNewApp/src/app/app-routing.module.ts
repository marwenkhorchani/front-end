import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: NavbarAdminComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        outlet: 'admin',
      },
    ],
  },
  {
    path: 'student',
    component: NavbarStudentComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        outlet: 'student',
      },
    ],
  },
  {
    path: 'teacher',
    component: NavbarTeacherComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        outlet: 'teacher',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
