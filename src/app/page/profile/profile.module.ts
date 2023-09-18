import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { TotalMeditationComponent } from './total-meditation/total-meditation.component';
import { LongestSessionComponent } from './longest-session/longest-session.component';
// import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    ProfileComponent,
    TotalMeditationComponent,
    LongestSessionComponent,
    // SettingsComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
