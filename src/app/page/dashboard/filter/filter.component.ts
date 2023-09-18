import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  constructor(private router: Router) {}
  isFilterOpen = false;
  filterTitle: String = '';
  selectedGoal: number | null = null;
  // showGoal: string = '';
  filterList = [
    {
      icon: '../../../assets/icons/clockIcon.svg',
      filterName: 'Duration',
    },
    {
      icon: '../../../assets/icons/GoalIcon.svg',
      filterName: 'Goal',
      showGoal: '',
    },
  ];
  goalList = [
    'Stress Decrease',
    'Happiness',
    'Sleep Better',
    'Positivity',
    'Daily Inspiration',
  ];

  openFilterModal(typeOffilter: string) {
    if (typeOffilter === 'Duration') {
      this.isFilterOpen = true;
      this.filterTitle = 'Duration';
    } else if (typeOffilter === 'Goal') {
      this.isFilterOpen = true;
      this.filterTitle = 'Goal';
    }
  }

  closeFilterModal() {
    this.isFilterOpen = false;
  }
  getGoal(index: number | null) {
    if (index !== null) {
      const selectedGoal = this.goalList[index];
      // this.showGoal = selectedGoal;
      this.isFilterOpen = false;
    } else {
      console.log('No goal selected.');
    }
  }
  goBack() {
    this.router.navigate(['tabs/dashboard']);
  }
  ngOnInit(): void {
    this.isFilterOpen = true;
    this.filterTitle = 'Duration';
  }
}
