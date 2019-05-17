import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nospec10Component } from './nospec10.component';

describe('Nospec10Component', () => {
  let component: Nospec10Component;
  let fixture: ComponentFixture<Nospec10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nospec10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nospec10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
