import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWonBetModalComponent } from './detail-won-bet-modal.component';

describe('DetailWonBetModalComponent', () => {
  let component: DetailWonBetModalComponent;
  let fixture: ComponentFixture<DetailWonBetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailWonBetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWonBetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
