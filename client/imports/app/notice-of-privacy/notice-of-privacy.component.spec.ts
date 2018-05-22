import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeOfPrivacyComponent } from './notice-of-privacy.component';

describe('NoticeOfPrivacyComponent', () => {
  let component: NoticeOfPrivacyComponent;
  let fixture: ComponentFixture<NoticeOfPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeOfPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeOfPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
