import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../tabs/tabs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen-main',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './home-screen-main.component.html',
  styleUrls: ['./home-screen-main.component.scss'],
})
export class HomeScreenMainComponent {
  constructor(private router: Router) {}
  openCategories(typeOFcategories: string) {
    if (typeOFcategories === 'jobStress') {
      this.router.navigate(['/job-stress']);
    }
  }
  showRecommendedDetail(RecommendedDetail: string) {
    if (RecommendedDetail === 'AnxietyProblems') {
      this.router.navigate(['/recommended-detail/AnxietyProblems']);
    } else if (RecommendedDetail === 'SleepBetter') {
      this.router.navigate(['/recommended-detail/SleepBetter']);
    }
  }
  openFilter(){
    this.router.navigate(['/filter']);
  }
}
