import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTdComponent } from './child-td.component';

describe('ChildTdComponent', () => {
  let component: ChildTdComponent;
  let fixture: ComponentFixture<ChildTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
