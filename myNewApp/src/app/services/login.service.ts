import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  login(username: String, password: String, role:String) {
    const body = {
      username: username,
      password: password,
      role: role,
    };

    return this.http.post(`${environment.apiUrl}/api/login`, body);
  }
}
