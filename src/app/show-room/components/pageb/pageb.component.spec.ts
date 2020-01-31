import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagebComponent } from './pageb.component';

describe('PagebComponent', () => {
  let component: PagebComponent;
  let fixture: ComponentFixture<PagebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
