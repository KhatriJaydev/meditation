import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  isOpen: boolean = false;
  show = false;
  password: string;

  passwordForm: FormGroup;


  constructor(private router: Router, private fb: FormBuilder) {
    this.password = 'password';

    this.passwordForm = this.fb.group({
      password: ['password', Validators.required] // Initialize with 'password'
    });
  }
  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  continuePassword() {}

  showHidepass() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  goBack() {
    this.router.navigate(['profile', 'settings']);
  }

  closePopup() {
    this.isOpen = false;
  }
}
