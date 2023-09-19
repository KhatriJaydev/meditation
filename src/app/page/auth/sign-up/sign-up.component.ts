import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  passwordForm!: FormGroup;

  show = false;
  password: any;
  passwordStrength: number = 0;
  message: string = '';

  constructor(
    public formbuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    this.createForm();
  }

  showEnterEmailModel = true;
  showEnterPassModel = false;

  goToenterPass() {
    this.showEnterEmailModel = false;
    this.showEnterPassModel = true;
  }

  createForm() {
    this.signUpForm = this.formbuilder.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      Email: ['', Validators.required],
    });

    this.passwordForm = this.formbuilder.group({
      password: ['', Validators.required],
    });
  }

  goToSignIN() {
    this.router.navigate(['/sign-in']);
  }

  backToEnterEmail() {
    this.location.back();
  }

  hideShowPass() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  isCriteriaValid(criteria: string): boolean {
    const password = this.passwordForm.get('password')?.value;

    switch (criteria) {
      case 'length':
        return password.length >= 6;
      case 'number':
        return /[0-9]/.test(password);
      case 'uppercase':
        return /[A-Z]/.test(password);
      case 'special':
        return /[!@#$%^&*]/.test(password);
      default:
        return false;
    }
  }
  onPasswordChange() {
    const password = this.passwordForm.get('password')?.value;
    const criteria = {
      length: password.length >= 6,
      number: /\d/.test(password),
      uppercase: /[A-Z]/.test(password),
      special: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password),
    };

    let validCriteriaCount = 0;
    for (const criterion of Object.values(criteria)) {
      if (criterion) {
        validCriteriaCount++;
      }
    }

    this.passwordStrength = (validCriteriaCount / 4) * 100;

    if (this.passwordStrength <= 25) {
      this.message = 'Poor';
    } else if (this.passwordStrength <= 50) {
      this.message = 'Not Good';
    } else if (this.passwordStrength <= 75) {
      this.message = 'Average';
    } else {
      this.message = 'Strong';
    }
  }
}
