import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowshapeComponent } from './showshape.component';

describe('ShowshapeComponent', () => {
  let component: ShowshapeComponent;
  let fixture: ComponentFixture<ShowshapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowshapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowshapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
