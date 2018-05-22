import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBetsPageComponent } from './pending-bets-page.component';

describe('PendingBetsPageComponent', () => {
  let component: PendingBetsPageComponent;
  let fixture: ComponentFixture<PendingBetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingBetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
