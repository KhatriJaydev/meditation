import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  activeTab: string = 'home';
  constructor(private router: Router) {}

  goToSelectedItem(SelectedSection: string) {
    this.activeTab = SelectedSection;
    if (SelectedSection === 'home') {
      this.router.navigate(['tabs', 'dashboard']);
    } else if (SelectedSection === 'explor') {
      this.router.navigate(['tabs', 'explore']);
    } else if (SelectedSection === 'profile') {
      this.router.navigate(['tabs', 'profile']);
    }
  }
}
