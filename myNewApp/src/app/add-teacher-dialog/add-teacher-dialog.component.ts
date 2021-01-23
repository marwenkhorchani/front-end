import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-teacher-dialog',
  templateUrl: './add-teacher-dialog.component.html',
  styleUrls: ['./add-teacher-dialog.component.scss'],
})
export class AddTeacherDialogComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  // @ts-ignore
  teacherForm: FormGroup = new FormGroup('', '');

  constructor(
    // tslint:disable-next-line:variable-name
    public dialogRef: MatDialogRef<AddTeacherDialogComponent>,
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
    this.teacherForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      cin: ['', Validators.required],
      phone: ['', Validators.required],
      img: [
        'https://www.w3schools.com/w3images/avatar1.png',
        Validators.required,
      ],
      birthday: ['', Validators.required],
      classes: ['', Validators.required],
    });
    this.patchValues();
  }

  updateTeacher(id: any) {
    if (this.teacherForm.valid) {
      this.adminService
        .updateTeacher(id, this.teacherForm.value)
        .subscribe((value) => {
          this.dialogRef.close();
          this.openSnackBar('the Teacher was updated', 'close');
        });
    }
  }

  addTeacher() {
    if (this.teacherForm.valid) {
      console.log(this.teacherForm.value);
      this.adminService
        .addTeacher(this.teacherForm.value)
        .subscribe((value) => {
          this.dialogRef.close();
          this.openSnackBar('the Teacher was added', 'close');
        });
    }
  }

  patchValues() {
    if (this.data) {
      this.teacherForm?.patchValue(this.data);
    }
  }

  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
