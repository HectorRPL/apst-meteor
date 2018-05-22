import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossesBetsPageComponent } from './losses-bets-page.component';

describe('LossesBetsPageComponent', () => {
  let component: LossesBetsPageComponent;
  let fixture: ComponentFixture<LossesBetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossesBetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossesBetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
