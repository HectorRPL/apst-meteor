import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLossesBetModalComponent } from './detail-losses-bet-modal.component';

describe('DetailLossesBetModalComponent', () => {
  let component: DetailLossesBetModalComponent;
  let fixture: ComponentFixture<DetailLossesBetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLossesBetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLossesBetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
