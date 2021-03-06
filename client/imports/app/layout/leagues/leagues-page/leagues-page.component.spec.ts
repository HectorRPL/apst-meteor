import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesPageComponent } from './leagues-page.component';

describe('LeaguesPageComponent', () => {
  let component: LeaguesPageComponent;
  let fixture: ComponentFixture<LeaguesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
