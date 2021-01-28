import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {
  http: HttpClient;
  urlApi = 'http://localhost:3030/api/courses';
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  addService(obj:any ) {
    return this.http.post(this.urlApi, obj);
  }
}