import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KunduppgifterComponent } from './kunduppgifter.component';

describe('KunduppgifterComponent', () => {
  let component: KunduppgifterComponent;
  let fixture: ComponentFixture<KunduppgifterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KunduppgifterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KunduppgifterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
