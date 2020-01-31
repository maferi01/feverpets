import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRouterComponent } from './layout-router.component';

describe('LayoutRouterComponent', () => {
  let component: LayoutRouterComponent;
  let fixture: ComponentFixture<LayoutRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
