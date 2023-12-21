import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerpageComponent } from './employerpage.component';

describe('EmployerpageComponent', () => {
  let component: EmployerpageComponent;
  let fixture: ComponentFixture<EmployerpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerpageComponent]
    });
    fixture = TestBed.createComponent(EmployerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
