import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AdminService } from '../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    private adminService: AdminService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
  deleteStudent(id: any) {
    this.adminService.deleteStudent(id).subscribe((value) => {
      this.dialogRef.close();
      this.openSnackBar('the Student was deleted', 'close');
    });
  }
  deleteTeacher(id: any) {
    this.adminService.deleteTeacher(id).subscribe((value) => {
      this.dialogRef.close();
      this.openSnackBar('the Teacher was deleted', 'close');
    });
  }
  deleteAdmin(id: any) {
    this.adminService.deleteAdmin(id).subscribe((value) => {
      this.dialogRef.close();
      this.openSnackBar('the Admin was deleted', 'close');
    });
  }
}
