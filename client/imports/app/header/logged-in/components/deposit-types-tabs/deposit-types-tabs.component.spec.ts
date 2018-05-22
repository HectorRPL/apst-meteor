import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositTypesTabsComponent } from './deposit-types-tabs.component';

describe('DepositTypesTabsComponent', () => {
  let component: DepositTypesTabsComponent;
  let fixture: ComponentFixture<DepositTypesTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositTypesTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositTypesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
