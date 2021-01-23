import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.scss'],
})
export class NavbarStudentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage['login_status'] = '0';
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }
}
