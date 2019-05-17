import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flatcomponent2Component } from './flatcomponent2.component';

describe('Flatcomponent2Component', () => {
  let component: Flatcomponent2Component;
  let fixture: ComponentFixture<Flatcomponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flatcomponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flatcomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
