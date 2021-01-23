import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CLASS_DATA } from './class-data';
import { AdminService } from '../services/admin.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  levels = CLASS_DATA;
  classes = [{ name: 'none' }];
  disClass = true;
  name = this.data ? this.data.name : null;
  CIN = this.data ? this.data.CIN : null;
  Email = this.data ? this.data.Email : null;
  level = null;
  classname = null;
  birthday = this.data ? this.data.birthday : null;
  phone = this.data ? this.data.phone : null;
  // @ts-ignore
  studentForm: FormGroup = new FormGroup('', '');

  constructor(
    // tslint:disable-next-line:variable-name
    public dialogRef: MatDialogRef<AddDialogComponent>,
    private adminService: AdminService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) {}

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

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      cin: ['', Validators.required],
      phone: ['', Validators.required],
      img: [
        'https://www.w3schools.com/w3images/avatar6.png',
        Validators.required,
      ],
      birthday: ['', Validators.required],
      class: ['', Validators.required],
      level: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.patchValues();
  }

  updateStudent(id: any) {
    if (this.studentForm.valid) {
      this.adminService
        .updateStudent(id, this.studentForm.value)
        .subscribe((value) => {
          this.dialogRef.close();
          this.openSnackBar('the Student was updated', 'close');
        });
    }
  }

  addStudent() {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
      this.adminService
        .addStudent(this.studentForm.value)
        .subscribe((value) => {
          this.dialogRef.close();
          this.openSnackBar('the Student was added', 'close');
        });
    }
  }

  patchValues() {
    if (this.data) {
      this.studentForm?.patchValue(this.data);
    }
  }

  // tslint:disable-next-line:typedef
  levelSelected($event: any) {
    this.disClass = false;
    const obj = this.levels.find((a) => a.level === $event.value);
    // @ts-ignore
    this.classes = obj.classes;
  }

  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
