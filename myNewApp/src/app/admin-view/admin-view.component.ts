import { Component, OnInit } from '@angular/core';

import { PeriodicElement } from './periodic-element';
import { PeriodicElementTeacher } from './periodic-element-teacher';
import { PeriodicElementAdmin } from './periodic-element-admin';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { AdminService } from '../services/admin.service';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { AddTeacherDialogComponent } from '../add-teacher-dialog/add-teacher-dialog.component';
import { AddAdminDialogComponent } from '../add-admin-dialog/add-admin-dialog.component';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AdminViewComponent implements OnInit {
  dataSource = [];
  dataSourceTeacher = [];
  dataSourceAdmin = [];
  columnsToDisplay = ['username', 'email', 'class', 'cin'];
  columnsToDisplayTeacher = ['username', 'email', 'classes', 'cin'];
  columnsToDisplayAdmin = ['username', 'email', 'cin'];
  expandedElement: PeriodicElement | null | undefined;
  expandedElementTech: PeriodicElementTeacher | null | undefined;
  expandedElementAdm: PeriodicElementAdmin | null | undefined;

  constructor(public dialog: MatDialog, private adminService: AdminService) {}

  ngOnInit(): void {
    this.getStudents();
    this.getTeachers();
    this.getAdmins();
  }

  getStudents() {
    this.adminService.getStudents().subscribe((value) => {
      this.dataSource = value;
    });
  }

  getTeachers() {
    this.adminService.getTeachers().subscribe((value) => {
      console.log('teachers', value);
      this.dataSourceTeacher = value;
    });
  }
  getAdmins() {
    this.adminService.getAdmins().subscribe((value) => {
      console.log('teachers', value);
      this.dataSourceAdmin = value;
    });
  }

  deleteStudent(id: any) {
    this.adminService.deleteStudent(id).subscribe((value) => {});
  }

  openDialog(data?: any): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '700px',
      height: '750px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openTeacherDialog(data?: any): void {
    const dialogRef = this.dialog.open(AddTeacherDialogComponent, {
      width: '700px',
      height: '700px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openAdminDialog(data?: any): void {
    const dialogRef = this.dialog.open(AddAdminDialogComponent, {
      width: '700px',
      height: '650px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openInfoDialog(data?: any): void {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: '500px',
      height: '350px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
