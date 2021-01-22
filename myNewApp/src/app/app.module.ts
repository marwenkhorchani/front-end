import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleModule, RecurrenceEditorModule ,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent1 } from './components/schedule/schedule.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SharkDirective } from './shark.directive';
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns'
import {DateTimePickerModule} from '@syncfusion/ej2-angular-calendars';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent1,
    SharkDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule, RecurrenceEditorModule,
    HttpClientModule,
    FormsModule,
    DropDownListModule
    ,DateTimePickerModule,
    ReactiveFormsModule
  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
