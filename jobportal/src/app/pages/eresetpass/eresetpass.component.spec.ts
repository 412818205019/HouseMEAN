import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EresetpassComponent } from './eresetpass.component';

describe('EresetpassComponent', () => {
  let component: EresetpassComponent;
  let fixture: ComponentFixture<EresetpassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EresetpassComponent]
    });
    fixture = TestBed.createComponent(EresetpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
