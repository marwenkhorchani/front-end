import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
