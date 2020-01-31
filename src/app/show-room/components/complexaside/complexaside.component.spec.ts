import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexasideComponent } from './complexaside.component';

describe('ComplexasideComponent', () => {
  let component: ComplexasideComponent;
  let fixture: ComponentFixture<ComplexasideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexasideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
