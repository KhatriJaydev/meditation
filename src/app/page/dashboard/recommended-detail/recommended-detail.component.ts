import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recommended-detail',
  templateUrl: './recommended-detail.component.html',
  styleUrls: ['./recommended-detail.component.scss'],
})
export class RecommendedDetailComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  isSessionModalOpen = false;
  minutes: number = 0;
  seconds: number = 0;
  timer: any;
  isPlaying: boolean = false;

  sessionsList = [
    {
      icon: '../../../assets/icons/playIcon.svg',
      sessionType: 'Sleep Better',
      sessionMin: '2 min / 5 min',
    },
    {
      icon: '../../../assets/icons/clockIcon.svg',
      sessionType: 'Bad Dreams',
      sessionMin: '0 min / 10 min',
    },
    {
      icon: '../../../assets/icons/clockIcon.svg',
      sessionType: 'Panic Attacks',
      sessionMin: '0 min / 5 min',
    },
    {
      icon: '../../../assets/icons/clockIcon.svg',
      sessionType: 'Phone Addiction',
      sessionMin: '0 min / 15 min',
    },
    {
      icon: '../../../assets/icons/clockIcon.svg',
      sessionType: 'Overthinking',
      sessionMin: '0 min / 5 min',
    },
  ];

  openSessionModal() {
    this.isSessionModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeSessionModal() {
    this.isSessionModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = 0;
      }
    }, 1000);
    this.isPlaying = true;
  }

  stopTimer() {
    this.isPlaying = false;
    clearInterval(this.timer);
  }

  goBack() {
    this.router.navigate(['tabs/dashboard']);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const problemType = params.get('problemType');
    });
  }
}
