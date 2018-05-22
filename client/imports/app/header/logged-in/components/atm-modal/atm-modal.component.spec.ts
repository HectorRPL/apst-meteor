import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATMModalComponent } from './login-frm.component';

describe('ATMModalComponent', () => {
  let component: ATMModalComponent;
  let fixture: ComponentFixture<ATMModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATMModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATMModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
