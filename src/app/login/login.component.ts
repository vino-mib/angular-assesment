import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showSpinner!: boolean;
  loginForm: FormGroup;
  error: boolean;
  errorMsg: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.error = false;
    this.errorMsg = '';
    this.showSpinner = false;
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    this.showSpinner = true;
    this.errorMsg = '';
    this.error = false;
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      if (this.authService.login(this.loginForm.value)) {
        this.router.navigateByUrl('/home');
      } else {
        this.showSpinner = false;
        this.error = true;
        this.errorMsg = 'Username or password wrong';
        console.log(this.error);
      }
    } else {
      this.showSpinner = false;
      this.error = true;
      this.errorMsg = 'User name or password wrong';
    }
  }
}
