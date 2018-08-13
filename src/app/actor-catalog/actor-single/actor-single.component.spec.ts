import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorSingleComponent } from './actor-single.component';

describe('ActorSingleComponent', () => {
  let component: ActorSingleComponent;
  let fixture: ComponentFixture<ActorSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
