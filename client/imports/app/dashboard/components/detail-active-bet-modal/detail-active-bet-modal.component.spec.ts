import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActiveBetModalComponent } from './detail-active-bet-modal.component';

describe('DetailActiveBetModalComponent', () => {
  let component: DetailActiveBetModalComponent;
  let fixture: ComponentFixture<DetailActiveBetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailActiveBetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailActiveBetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
