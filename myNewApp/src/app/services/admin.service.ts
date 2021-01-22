import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(baseURL + 'student');
  }
  updateStudent(id: any, data: any): Observable<any> {
    return this.http.put(baseURL + 'student/' + id, data);
  }
  addStudent(data: any): Observable<any> {
    return this.http.post(baseURL + 'student/', data);
  }
  deleteStudent(id: any): Observable<any> {
    return this.http.delete(baseURL + 'student/' + id);
  }
  getTeachers(): Observable<any> {
    return this.http.get(baseURL + 'teacher');
  }
  updateTeacher(id: any, data: any): Observable<any> {
    return this.http.put(baseURL + 'teacher/' + id, data);
  }
  addTeacher(data: any): Observable<any> {
    return this.http.post(baseURL + 'teacher/', data);
  }
  deleteTeacher(id: any): Observable<any> {
    return this.http.delete(baseURL + 'teacher/' + id);
  }
  getAdmins(): Observable<any> {
    return this.http.get(baseURL + 'admin');
  }
  updateAdmin(id: any, data: any): Observable<any> {
    return this.http.put(baseURL + 'admin/' + id, data);
  }
  addAdmin(data: any): Observable<any> {
    return this.http.post(baseURL + 'admin/', data);
  }
  deleteAdmin(id: any): Observable<any> {
    return this.http.delete(baseURL + 'admin/' + id);
  }
}
