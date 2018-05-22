import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBetFrmComponent } from './create-bet-frm.component';

describe('CreateBetFrmComponent', () => {
  let component: CreateBetFrmComponent;
  let fixture: ComponentFixture<CreateBetFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBetFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBetFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
