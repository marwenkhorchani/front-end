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
  selector: 'app-add-admin-dialog',
  templateUrl: './add-admin-dialog.component.html',
  styleUrls: ['./add-admin-dialog.component.scss'],
})
export class AddAdminDialogComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  // @ts-ignore
  adminForm: FormGroup = new FormGroup('', '');
  constructor(
    // tslint:disable-next-line:variable-name
    public dialogRef: MatDialogRef<AddAdminDialogComponent>,
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
    this.adminForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      cin: ['', Validators.required],
      phone: ['', Validators.required],
      img: [
        'https://www.w3schools.com/w3images/avatar2.png',
        Validators.required,
      ],
      birthday: ['', Validators.required],
    });
    this.patchValues();
  }

  updateAdmin(id: any) {
    if (this.adminForm.valid) {
      this.adminService
        .updateAdmin(id, this.adminForm.value)
        .subscribe((value) => {
          this.dialogRef.close();
          this.openSnackBar('the Admin was updated', 'close');
        });
    }
  }

  addAdmin() {
    if (this.adminForm.valid) {
      console.log(this.adminForm.value);
      this.adminService.addAdmin(this.adminForm.value).subscribe((value) => {
        this.dialogRef.close();
        this.openSnackBar('the Admin was added', 'close');
      });
    }
  }

  patchValues() {
    if (this.data) {
      this.adminForm?.patchValue(this.data);
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
