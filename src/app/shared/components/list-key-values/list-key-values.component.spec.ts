import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKeyValuesComponent } from './list-key-values.component';

describe('ListKeyValuesComponent', () => {
  let component: ListKeyValuesComponent;
  let fixture: ComponentFixture<ListKeyValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKeyValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKeyValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
