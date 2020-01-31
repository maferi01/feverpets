import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRouterInsideComponent } from './layout-router-inside.component';

describe('LayoutRouterInsideComponent', () => {
  let component: LayoutRouterInsideComponent;
  let fixture: ComponentFixture<LayoutRouterInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutRouterInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutRouterInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
