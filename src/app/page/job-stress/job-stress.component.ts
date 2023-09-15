import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-stress',
  templateUrl: './job-stress.component.html',
  styleUrls: ['./job-stress.component.scss'],
})
export class JobStressComponent {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/home-screen-main']);
  }
}
