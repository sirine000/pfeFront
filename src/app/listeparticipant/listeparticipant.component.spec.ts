import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeparticipantComponent } from './listeparticipant.component';

describe('ListeparticipantComponent', () => {
  let component: ListeparticipantComponent;
  let fixture: ComponentFixture<ListeparticipantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeparticipantComponent]
    });
    fixture = TestBed.createComponent(ListeparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
