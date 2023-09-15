import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStressComponent } from './job-stress.component';

describe('JobStressComponent', () => {
  let component: JobStressComponent;
  let fixture: ComponentFixture<JobStressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobStressComponent]
    });
    fixture = TestBed.createComponent(JobStressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
