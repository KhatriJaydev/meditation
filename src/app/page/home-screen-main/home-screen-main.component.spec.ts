import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenMainComponent } from './home-screen-main.component';

describe('HomeScreenMainComponent', () => {
  let component: HomeScreenMainComponent;
  let fixture: ComponentFixture<HomeScreenMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeScreenMainComponent]
    });
    fixture = TestBed.createComponent(HomeScreenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
