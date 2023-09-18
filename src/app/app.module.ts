import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.page';
import { LaunchScreenComponent } from './page/launch-screen/launch-screen.component';
import { AddIconComponent } from './page/add-icon/add-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaunchScreenComponent,
    AddIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
