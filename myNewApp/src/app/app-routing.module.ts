import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent1 } from './components/schedule/schedule.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent1 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
