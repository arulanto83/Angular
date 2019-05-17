import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flatcomponent1Component } from './flatcomponent1.component';

describe('Flatcomponent1Component', () => {
  let component: Flatcomponent1Component;
  let fixture: ComponentFixture<Flatcomponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flatcomponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flatcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
