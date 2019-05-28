import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GConstentComponent } from './gconstent.component';

describe('GConstentComponent', () => {
  let component: GConstentComponent;
  let fixture: ComponentFixture<GConstentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GConstentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GConstentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
