import { Component } from '@angular/core';
import { AddIconComponent } from '../page/add-icon/add-icon.component';
import { LaunchScreenComponent } from '../page/launch-screen/launch-screen.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [AddIconComponent, LaunchScreenComponent],
})
export class HomeComponent {}
