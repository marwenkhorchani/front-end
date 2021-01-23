import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-teacher',
  templateUrl: './navbar-teacher.component.html',
  styleUrls: ['./navbar-teacher.component.scss'],
})
export class NavbarTeacherComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
