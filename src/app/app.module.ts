import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobStressComponent } from './page/job-stress/job-stress.component';
import { RecommendedDetailComponent } from './page/recommended-detail/recommended-detail.component';
import { FilterComponent } from './page/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    JobStressComponent,
    RecommendedDetailComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
