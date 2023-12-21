import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsresetpassComponent } from './jsresetpass.component';

describe('JsresetpassComponent', () => {
  let component: JsresetpassComponent;
  let fixture: ComponentFixture<JsresetpassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsresetpassComponent]
    });
    fixture = TestBed.createComponent(JsresetpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
