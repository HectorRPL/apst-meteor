import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBetsListComponent } from './pending-bets-list.component';

describe('PendingBetsListComponent', () => {
  let component: PendingBetsListComponent;
  let fixture: ComponentFixture<PendingBetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingBetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
