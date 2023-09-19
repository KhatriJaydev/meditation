import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent {
  isOpen: boolean = false;

  constructor(private router: Router, public formbuilder: FormBuilder) {
    this.createForm();
  }
  signUpForm!: FormGroup;

  createForm() {
    this.signUpForm = this.formbuilder.group({
      Fname: ['', Validators.required],
      Lname: ['', Validators.required],
      Email: ['', Validators.required],
    });
  }

  goBack() {
    this.router.navigate(['profile', 'settings']);
  }
  updateDetail() {
    this.isOpen = true;
    // if (this.signUpForm.valid) {
    //   const formData = this.signUpForm.value;
    //   console.log('Form data:', formData);
    // } else {
    //   console.log('Form is invalid. Please check the fields.');
    // }
  }

  closePopup() {
    this.isOpen = false;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
  
}
