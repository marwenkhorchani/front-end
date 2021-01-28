import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  http: HttpClient;
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  getEvents(acitvityName: String, description: String ,date: Date, hour: String ) {
    const body: any = {
      acitvityName: acitvityName,
      description: description,
      date: date,
      hour: hour,
    };
    return this.http.get(`${environment.apiUrl}/api/activity`, body);
  }

  addEvent(acitvityName: string, description: string, date: Date, hour: string) {
    const event: any = {
      acitvityName: acitvityName,
      description: description,
      date: date,
      hour: hour,
    };
    console.log('in service', event);
    return this.http.post(`${environment.apiUrl}/api/activity/`, event);
  }

  deleteEvent(eventId: String) {
    return this.http.delete(`${environment.apiUrl}/api/activity/` + eventId);
  }
}