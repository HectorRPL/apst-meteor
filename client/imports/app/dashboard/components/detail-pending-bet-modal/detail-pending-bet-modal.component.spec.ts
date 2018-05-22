import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPendingBetModalComponent } from './detail-pending-bet-modal.component';

describe('DetailPendingBetModalComponent', () => {
  let component: DetailPendingBetModalComponent;
  let fixture: ComponentFixture<DetailPendingBetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPendingBetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPendingBetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
