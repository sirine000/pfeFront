import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCycleComponent } from './modifier-cycle.component';

describe('ModifierCycleComponent', () => {
  let component: ModifierCycleComponent;
  let fixture: ComponentFixture<ModifierCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierCycleComponent]
    });
    fixture = TestBed.createComponent(ModifierCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
