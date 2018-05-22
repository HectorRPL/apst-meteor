import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailAlertNotVerifiedComponent } from './mail-alert-not-verified.component';

describe('MailAlertNotVerifiedComponent', () => {
  let component: MailAlertNotVerifiedComponent;
  let fixture: ComponentFixture<MailAlertNotVerifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailAlertNotVerifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailAlertNotVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
