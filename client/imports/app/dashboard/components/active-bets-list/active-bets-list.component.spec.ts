import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBetsListComponent } from './active-bets-list.component';

describe('ActiveBetsListComponent', () => {
  let component: ActiveBetsListComponent;
  let fixture: ComponentFixture<ActiveBetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveBetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
