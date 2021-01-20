import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(body: any) {
    return this.http.post(`${environment.apiUrl}/api/login`, body, {
      observe: 'body',
    });
  }
}
