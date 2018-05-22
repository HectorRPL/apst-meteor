import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetListPageComponent } from './bet-list-page.component';

describe('BetListPageComponent', () => {
  let component: BetListPageComponent;
  let fixture: ComponentFixture<BetListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
