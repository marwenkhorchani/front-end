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
    return this.http.get(`${environment.apiUrl}/api/grades` );
  }
   students = [
    {
      firstname: "mejdi",
      lastname: "kouira",
      grade: 10,
    },
    {
      firstname: "oussama",
      lastname: "medfai",
      grade: 8,
    },
    {
      firstname: "marwen",
      lastname: "korcheni",
      grade: 15,
    },
    {
      firstname: "yasmine",
      lastname: "ghoulem",
      grade: 13,
    },
    {
      firstname: "nader",
      lastname: "hezzy",
      grade: 11,
    },
    {
      firstname: "heni",
      lastname: "mezrani",
      grade: 7,
    },
  ];
}
