import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  http: HttpClient;
  urlApi = 'http://localhost:3030/api/schedule/';

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  getService(){
    return this.http.get(this.urlApi);
  }
  addService(body:any){
    return this.http.post(this.urlApi,body);
  }
  deleteService(id:any){
    return this.http.delete(`http://localhost:3030/api/schedule/${id}`);
  }
  updateService(id:any,body:any){
    return this.http.put(`http://localhost:3030/api/schedule/${id}`,body);

  }
}
