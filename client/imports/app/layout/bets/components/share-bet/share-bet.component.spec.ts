import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBetComponent } from './share-bet.component';

describe('ShareBetComponent', () => {
  let component: ShareBetComponent;
  let fixture: ComponentFixture<ShareBetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareBetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
