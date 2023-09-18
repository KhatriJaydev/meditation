import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddIconComponent } from '../add-icon/add-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch-screen',
  // standalone: true,
  // imports: [CommonModule, AddIconComponent],
  templateUrl: './launch-screen.component.html',
  styleUrls: ['./launch-screen.component.scss'],
})
export class LaunchScreenComponent {
  logoSVG: boolean = false;
  secondScreen: boolean = false;
  thirdScreen: boolean = false;
  fourthScreen: boolean = false;
  step = 2;
  constructor(private router: Router) {
    this.step = 5;

    this.logoSVG = true;
    setTimeout(() => {
      this.logoSVG = false;
      this.secondScreen = true;
    }, 3000);
  }

  nextStep() {
    if (this.step < 5) {
      this.step++;
    }
  }
  skipScreen() {
    if (this.step === 2) {
      this.step = 5;
    }
  }
  backScreen() {
    if (this.step > 0) {
      this.step--;
    }
  }

  signIn() {
    this.router.navigate(['sign-in']);
  }

  signUp() {
    this.router.navigate(['sign-up']);
  }
}
