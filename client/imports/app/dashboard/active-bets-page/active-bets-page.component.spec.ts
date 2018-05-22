import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBetsPageComponent } from './active-bets-page.component';

describe('ActiveBetsPageComponent', () => {
  let component: ActiveBetsPageComponent;
  let fixture: ComponentFixture<ActiveBetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveBetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
