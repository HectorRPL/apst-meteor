import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserMenuLoggedInComponent} from './user-menu-logged-in.component';

describe('UserMenuLoggedInComponent', () => {
  let component:UserMenuLoggedInComponent;
  let fixture:ComponentFixture<UserMenuLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserMenuLoggedInComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
