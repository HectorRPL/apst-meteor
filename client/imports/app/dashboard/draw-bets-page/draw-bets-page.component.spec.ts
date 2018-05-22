import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawBetsPageComponent } from './draw-bets-page.component';

describe('DrawBetsPageComponent', () => {
  let component: DrawBetsPageComponent;
  let fixture: ComponentFixture<DrawBetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawBetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawBetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
