import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private router: Router) {}
  goToSettings() {
    this.router.navigate(['profile', 'settings']);
  }
  showProgress(progress: string) {
    if (progress === 'totalMeditation') {
      this.router.navigate(['profile', 'total-meditation']);
    } else if (progress === 'longestSession') {
      this.router.navigate(['profile', 'longest-session']);
    }
  }
}
