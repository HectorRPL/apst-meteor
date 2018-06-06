import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowUserChipsComponent} from './show-user-chips.component';

describe('ShowUserChipsComponent', () => {
  let component:ShowUserChipsComponent;
  let fixture:ComponentFixture<ShowUserChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowUserChipsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
