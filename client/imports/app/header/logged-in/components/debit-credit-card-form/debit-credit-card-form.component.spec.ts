import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCreditCardFormComponent } from './debit-credit-card-form.component';

describe('DebitCreditCardFormComponent', () => {
  let component: DebitCreditCardFormComponent;
  let fixture: ComponentFixture<DebitCreditCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCreditCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCreditCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
