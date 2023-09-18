import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';


@NgModule({
  declarations: [
    SettingsComponent,
    PersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
