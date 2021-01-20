import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleModule, RecurrenceEditorModule ,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent } from './components/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
