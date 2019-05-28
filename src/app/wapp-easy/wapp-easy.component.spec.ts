import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WAPPEASYComponent } from './wapp-easy.component';

describe('WAPPEASYComponent', () => {
  let component: WAPPEASYComponent;
  let fixture: ComponentFixture<WAPPEASYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WAPPEASYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WAPPEASYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
