import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerpageComponent } from './jobseekerpage.component';

describe('JobseekerpageComponent', () => {
  let component: JobseekerpageComponent;
  let fixture: ComponentFixture<JobseekerpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobseekerpageComponent]
    });
    fixture = TestBed.createComponent(JobseekerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
