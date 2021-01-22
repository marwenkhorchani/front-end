import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';

const routes: Routes = [
  { path: 'admin-view', component: AdminViewComponent },
  { path: 'student-profile', component: StudentProfileComponent },
  { path: 'teacher-view', component: TeacherViewComponent },
  { path: 'teacher-profile', component: TeacherProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
