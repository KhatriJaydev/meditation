import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filterList = [
    {
      icon: '../../../assets/icons/clockIcon.svg',
      filterName: 'Duration',
    },
    {
      icon: '../../../assets/icons/GoalIcon.svg',
      filterName: 'Goal',
    },
  ];
  openFilterModal(typeOffilter: string) {
    if (typeOffilter === 'Duration') {
      
    } else if (typeOffilter === 'Goal') {
    }
  }
}
