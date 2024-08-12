import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursParticipantComponent } from './cours-participant.component';

describe('CoursParticipantComponent', () => {
  let component: CoursParticipantComponent;
  let fixture: ComponentFixture<CoursParticipantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursParticipantComponent]
    });
    fixture = TestBed.createComponent(CoursParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
