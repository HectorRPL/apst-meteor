import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonBetsPageComponent } from './won-bets-page.component';

describe('WonBetsPageComponent', () => {
  let component: WonBetsPageComponent;
  let fixture: ComponentFixture<WonBetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonBetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonBetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
