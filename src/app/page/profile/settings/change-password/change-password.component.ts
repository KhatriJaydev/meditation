import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  isPopUpOpen: boolean = false;
  show: boolean = false;
  
  password: string;
  passwordForm: FormGroup;
  
  oldPasswordModel: boolean = true;
  createPasswordModel: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {
    this.password = 'password';

    this.passwordForm = this.fb.group({
      password: ['password', Validators.required],
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

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  checkOldPassword() {
    this.createPasswordModel = true;
    this.oldPasswordModel = false;
  }
  updatePassword(){
    this.isPopUpOpen = true;
  }
  goBack() {
    this.router.navigate(['profile', 'settings']);
  }

  closePopup() {
    this.isPopUpOpen = false;
  }
}
