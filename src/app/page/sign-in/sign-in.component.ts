import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  forgotPassForm!: FormGroup;

  password: string;
  show = false;

  loginModel = true;
  forgotPassModel = false;
  emailVerificationModel = false;
  resetPasswordModel = false;
  passwordUpdated = false;

  constructor(public router: Router, private formbuilder: FormBuilder) {
    this.password = 'password';

    this.forgotPassForm = this.formbuilder.group({
      forgotPassword: ['', Validators.required],
      enterOTP: ['', Validators.required],
    });
  }

  showHidepass() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  signUP() {
    this.router.navigate(['/sign-up']);
  }

  forgotPassword() {
    this.forgotPassModel = true;
    this.loginModel = false;
    this.emailVerificationModel = false;
  }

  recoverPass() {
    this.forgotPassModel = false;
    this.loginModel = false;
    this.emailVerificationModel = true;
  }

  verifyOTP() {
    this.loginModel = false;
    this.forgotPassModel = false;
    this.emailVerificationModel = false;
    this.resetPasswordModel = true;
  }

  resetPassword() {
    // this.passwordUpdated = true;
    this.loginModel = false;
    this.forgotPassModel = false;
    this.emailVerificationModel = false;
    this.resetPasswordModel = false;
  }
}
