import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBetPageComponent } from './create-bet-page.component';

describe('CreateBetPageComponent', () => {
  let component: CreateBetPageComponent;
  let fixture: ComponentFixture<CreateBetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
