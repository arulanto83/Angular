import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatcomponentComponent } from './flatcomponent.component';

describe('FlatcomponentComponent', () => {
  let component: FlatcomponentComponent;
  let fixture: ComponentFixture<FlatcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
