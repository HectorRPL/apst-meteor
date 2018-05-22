import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountModalComponent } from './my-account-modal.component';

describe('MyAccountModalComponent', () => {
  let component: MyAccountModalComponent;
  let fixture: ComponentFixture<MyAccountModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
