import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordModalComponent } from './recover-password-modal.component';

describe('RecoverPasswordModalComponent', () => {
  let component: RecoverPasswordModalComponent;
  let fixture: ComponentFixture<RecoverPasswordModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverPasswordModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverPasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
