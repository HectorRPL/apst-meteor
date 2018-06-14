import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUrlFormComponent } from './share-bet.component';

describe('ShowUrlFormComponent', () => {
  let component: ShowUrlFormComponent;
  let fixture: ComponentFixture<ShowUrlFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUrlFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
