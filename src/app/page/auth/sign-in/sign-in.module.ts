import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageRoutingModule } from './sign-in-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
