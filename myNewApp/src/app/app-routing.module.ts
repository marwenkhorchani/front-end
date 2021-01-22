import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component'

const routes: Routes = [{ path: 'login', component: LoginComponent }, { path: 'listgrades', component: ListOfStudentComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
