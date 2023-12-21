import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerpostedjobspageComponent } from './employerpostedjobspage.component';

describe('EmployerpostedjobspageComponent', () => {
  let component: EmployerpostedjobspageComponent;
  let fixture: ComponentFixture<EmployerpostedjobspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerpostedjobspageComponent]
    });
    fixture = TestBed.createComponent(EmployerpostedjobspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
