import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedFreelancersComponent } from './top-rated-freelancers.component';

describe('TopRatedFreelancersComponent', () => {
  let component: TopRatedFreelancersComponent;
  let fixture: ComponentFixture<TopRatedFreelancersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedFreelancersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
