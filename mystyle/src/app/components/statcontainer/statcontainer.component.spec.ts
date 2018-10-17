import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatcontainerComponent } from './statcontainer.component';

describe('StatcontainerComponent', () => {
  let component: StatcontainerComponent;
  let fixture: ComponentFixture<StatcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
