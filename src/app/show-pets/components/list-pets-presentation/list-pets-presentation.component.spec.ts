import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPetsPresentationComponent } from './list-pets-presentation.component';

describe('ListPetsPresentationComponent', () => {
  let component: ListPetsPresentationComponent;
  let fixture: ComponentFixture<ListPetsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPetsPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPetsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
