import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllCoursesService {
  courses: any;
  http: HttpClient;
  urlApi = 'http://localhost:3030/api/courses/courses';
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  getService(): Observable<any> {
    return this.http.get(this.urlApi);
  }
}