import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../tabs/tabs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  // standalone: true,
  // imports: [CommonModule, TabsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  openCategories(typeOFcategories: string) {
    if (typeOFcategories === 'jobStress') {
      this.router.navigate(['dashboard', 'job-strees']);
    }
  }

  showRecommendedDetail(RecommendedDetail: string) {
    if (RecommendedDetail === 'AnxietyProblems') {
      this.router.navigate(['dashboard/recommended-detail/AnxietyProblems']);
    } else if (RecommendedDetail === 'SleepBetter') {
      this.router.navigate(['dashboard/recommended-detail/SleepBetter']);
    }
  }
  openFilter() {
    this.router.navigate(['dashboard', 'filter']);
  }
}
