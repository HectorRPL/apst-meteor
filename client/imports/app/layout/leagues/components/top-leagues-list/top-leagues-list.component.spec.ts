import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeaguesListComponent } from './top-leagues-list.component';

describe('TopLeaguesListComponent', () => {
  let component: TopLeaguesListComponent;
  let fixture: ComponentFixture<TopLeaguesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLeaguesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeaguesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
