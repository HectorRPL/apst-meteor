import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossesBetsListComponent } from './losses-bets-list.component';

describe('LossesBetsListComponent', () => {
  let component: LossesBetsListComponent;
  let fixture: ComponentFixture<LossesBetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossesBetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossesBetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
