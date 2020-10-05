import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
 submitted = false;
 constructor(
  private _formBuilder: FormBuilder,
  private _loginService: LoginService
 ) {}

 ngOnInit(): void {
  this.loginForm = this._formBuilder.group({
   username: [null, Validators.required],
   password: [null, [Validators.required, Validators.minLength(1)]],
  });
 }

 get f(): FormGroup['controls'] {
  return this.loginForm.controls;
 }

 login() {
  this.submitted = true;

  if (this.loginForm.invalid) return;
  if (this.loginForm.valid) {
   this._loginService.login(this.loginForm.value);
  }
 }
}
