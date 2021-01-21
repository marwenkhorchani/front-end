import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListOfStudentsService {
  http: HttpClient;
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  getAllStudents() {
    return this.http.get(environment.apiUrl );
  }
}
