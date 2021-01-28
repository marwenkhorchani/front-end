

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from './task-view/todo';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [];
  constructor (private http: HttpClient) {}

  getTasks(text: String, isDone: Boolean) {
    const body: any = {
      text: text,
      isDone: isDone,
    };
    return this.http.get(`${environment.apiUrl}/api/task`, body);
  }

  deletePost(taskId: String) {
    return this.http.delete(`${environment.apiUrl}/api/task/` + taskId);
  }

  addTask(text: string, isDone: boolean) {
    const task: any = { text: text, isDone: isDone };
    console.log('in service', task);
    return this.http.post(`${environment.apiUrl}/api/task/`, task);
  }
  
}