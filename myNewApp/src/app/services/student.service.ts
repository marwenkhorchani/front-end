import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseURL = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  getStudentById(id: any): Observable<any> {
    return this.http.get(baseURL + '/api/student/' + id);
  }
}
