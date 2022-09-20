import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollInfinitoComponent } from './scroll-infinito.component';

describe('ScrollInfinitoComponent', () => {
  let component: ScrollInfinitoComponent;
  let fixture: ComponentFixture<ScrollInfinitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollInfinitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollInfinitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
