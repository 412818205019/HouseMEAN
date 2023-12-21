import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedjobspageComponent } from './appliedjobspage.component';

describe('AppliedjobspageComponent', () => {
  let component: AppliedjobspageComponent;
  let fixture: ComponentFixture<AppliedjobspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedjobspageComponent]
    });
    fixture = TestBed.createComponent(AppliedjobspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
