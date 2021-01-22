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
    return this.http.get(baseURL + '/api/student');
  }
  updateStudent(id: any, data: any): Observable<any> {
    return this.http.put(baseURL + '/api/student/' + id, data);
  }
  addStudent(data: any): Observable<any> {
    return this.http.post(baseURL + '/api/student/', data);
  }
  deleteStudent(id: any): Observable<any> {
    return this.http.delete(baseURL + '/api/student/' + id);
  }
  getTeachers(): Observable<any> {
    return this.http.get(baseURL + '/api/teacher');
  }
  updateTeacher(id: any, data: any): Observable<any> {
    return this.http.put(baseURL + 'teacher/' + id, data);
  }
  addTeacher(data: any): Observable<any> {
    return this.http.post(baseURL + '/api/teacher/', data);
  }
  deleteTeacher(id: any): Observable<any> {
    return this.http.delete(baseURL + '/api/teacher/' + id);
  }
  getAdmins(): Observable<any> {
    return this.http.get(baseURL + '/api/admin');
  }
  updateAdmin(id: any, data: any): Observable<any> {
    return this.http.put(baseURL + '/api/admin/' + id, data);
  }
  addAdmin(data: any): Observable<any> {
    return this.http.post(baseURL + '/api/admin/', data);
  }
  deleteAdmin(id: any): Observable<any> {
    return this.http.delete(baseURL + '/api/admin/' + id);
  }
}
