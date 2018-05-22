import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetDetailPageComponent } from './bet-detail-page.component';

describe('BetDetailPageComponent', () => {
  let component: BetDetailPageComponent;
  let fixture: ComponentFixture<BetDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
