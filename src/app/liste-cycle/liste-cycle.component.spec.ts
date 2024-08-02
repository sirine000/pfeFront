import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCycleComponent } from './liste-cycle.component';

describe('ListeCycleComponent', () => {
  let component: ListeCycleComponent;
  let fixture: ComponentFixture<ListeCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCycleComponent]
    });
    fixture = TestBed.createComponent(ListeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
