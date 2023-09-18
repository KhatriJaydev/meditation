import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-meditation',
  templateUrl: './total-meditation.component.html',
  styleUrls: ['./total-meditation.component.scss'],
})
export class TotalMeditationComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['profile']);
  }
  public chartData = [
    { week: 'Week 1', index: 100 },
    { week: 'Week 2', index: 110 },
    { week: 'Week 3', index: 105 },
    // Add more data points as needed
  ];
  // index-chart.component.ts
  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    // Add more options as needed
  };
}
