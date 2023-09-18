import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { JobsStressComponent } from './jobs-stress/jobs-stress.component';
import { RecommendedDetailComponent } from './recommended-detail/recommended-detail.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    DashboardComponent,
    JobsStressComponent,
    RecommendedDetailComponent,
    FilterComponent
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
