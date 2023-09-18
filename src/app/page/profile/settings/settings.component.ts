import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private router: Router) {}
  settingsItems = [
    {
      settingIcon: '../../../../assets/icons/PersonalDetails.svg',
      settingTitle: 'Personal Details',
    },
    {
      settingIcon: '../../../../assets/icons/ChangePassword.svg',
      settingTitle: 'Change Password',
    },
    {
      settingIcon: '../../../../assets/icons/Preferences.svg',
      settingTitle: 'Preferences',
    },
    {
      settingIcon: '../../../../assets/icons/Notifications.svg',
      settingTitle: 'Notifications',
    },
    {
      settingIcon: '../../../../assets/icons/PrivacyPolicy.svg',
      settingTitle: 'Privacy Policy',
    },
    {
      settingIcon: '../../../../assets/icons/ContactUs.svg',
      settingTitle: 'Contact Us',
    },
    {
      settingIcon: '../../../../assets/icons/Logout.svg',
      settingTitle: 'Logout',
    },
  ];
  personaldetails() {
    this.router.navigate(['/profile/settings/personal-details']);
  }
  goBack() {
    this.router.navigate(['tabs', 'profile']);
  }
}
