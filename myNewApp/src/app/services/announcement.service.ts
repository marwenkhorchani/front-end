import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(environment.apiUrl + '/api/announcement');
  }

  deleteOne(id: string) {
    return this.http.delete(environment.apiUrl + '/api/announcement/' + id);
  }

  add(object: any) {
    return this.http.post(environment.apiUrl + '/api/announcement', object);
  }

  update(object: any, id: string) {
    return this.http.put(
      environment.apiUrl + '/api/announcement/' + id,
      object
    );
  }
}
