import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonBetsListComponent } from './won-bets-list.component';

describe('WonBetsListComponent', () => {
  let component: WonBetsListComponent;
  let fixture: ComponentFixture<WonBetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonBetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonBetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
