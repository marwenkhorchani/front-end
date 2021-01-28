import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Task } from './todo';
import { TasksService } from '../todo.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  tasks: Task[] = [];
  text: any = '';
  isDone: boolean = false;
  private tasksSub: Subscription | undefined;

  constructor(private tasksService: TasksService, router: Router) {
    // this.getTasks();
  }

  ngOnInit() {
    this.getTasks();
  }

  deleteTask(taskId: any) {
    console.log('in component');
    this.tasksService.deletePost(taskId).subscribe(() => {
      return this.getTasks();
    });
  }

  getTasks() {
    this.tasksService
      .getTasks(this.text, this.isDone)
      .subscribe((response: any) => {
        this.tasks = response;
      });
  }

  addTask(form: NgForm) {
    console.log('in component', form.value.text);
    this.text = form.value.text;
    this.tasksService.addTask(this.text, this.isDone).subscribe((res) => {
      console.log(res);
    });
    form.resetForm();
  }
  
}
