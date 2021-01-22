import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  getTeacherById(id: any): Observable<any> {
    return this.http.get(baseURL + 'teacher/' + id);
  }

  getClassesById(id: any): Observable<any> {
    return this.http.get(baseURL + 'class/' + id);
  }
}
