import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-meditation',
  templateUrl: './total-meditation.component.html',
  styleUrls: ['./total-meditation.component.scss'],
})
export class TotalMeditationComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['tabs', 'profile']);
  }
  
}
