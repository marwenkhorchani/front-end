import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent1 } from './components/schedule/schedule.component';
import {AllschedulesComponent} from './components/allschedules/allschedules.component'
const routes: Routes = [
  { path: 'schedule/:query', component: ScheduleComponent1 },
  {path:'allschedules', component: AllschedulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
