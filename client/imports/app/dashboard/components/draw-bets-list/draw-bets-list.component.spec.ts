import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawBetsListComponent } from './draw-bets-list.component';

describe('DrawBetsListComponent', () => {
  let component: DrawBetsListComponent;
  let fixture: ComponentFixture<DrawBetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawBetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawBetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
