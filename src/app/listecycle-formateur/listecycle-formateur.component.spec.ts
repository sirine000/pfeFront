import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecycleFormateurComponent } from './listecycle-formateur.component';

describe('ListecycleFormateurComponent', () => {
  let component: ListecycleFormateurComponent;
  let fixture: ComponentFixture<ListecycleFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecycleFormateurComponent]
    });
    fixture = TestBed.createComponent(ListecycleFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
