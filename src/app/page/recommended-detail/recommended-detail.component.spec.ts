import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedDetailComponent } from './recommended-detail.component';

describe('RecommendedDetailComponent', () => {
  let component: RecommendedDetailComponent;
  let fixture: ComponentFixture<RecommendedDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendedDetailComponent]
    });
    fixture = TestBed.createComponent(RecommendedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
