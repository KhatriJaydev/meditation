import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  constructor(private router: Router) {}
 
  goToSelectedItem(SelectedSection: string) {
    if (SelectedSection === 'home') {
      this.router.navigate(['/home-screen-main']);
    } else if (SelectedSection === 'explor') {
      this.router.navigate(['/explor']);
    } else if (SelectedSection === 'profile') {
      this.router.navigate(['/profile']);
    }
  }
}
