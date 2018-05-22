import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDrawBetModalComponent } from './detail-draw-bet-modal.component';

describe('DetailDrawBetModalComponent', () => {
  let component: DetailDrawBetModalComponent;
  let fixture: ComponentFixture<DetailDrawBetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDrawBetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDrawBetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
