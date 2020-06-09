import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrowingComponent } from './drowing.component';

describe('DrowingComponent', () => {
  let component: DrowingComponent;
  let fixture: ComponentFixture<DrowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
