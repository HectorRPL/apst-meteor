import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsFbComponent } from './top-leagues-list.component';

describe('CommentsFbComponent', () => {
  let component: CommentsFbComponent;
  let fixture: ComponentFixture<CommentsFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
