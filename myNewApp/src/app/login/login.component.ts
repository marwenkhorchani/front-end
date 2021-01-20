import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _myservice: LoginService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { 
      this.loginForm = new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      });
    }

  ngOnInit(): void {
  }
  // isValid(controlName : any) {
  //   return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  // }

  login() {
    // console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/']);
          },
          error => { }
        );
    }
  }

}
