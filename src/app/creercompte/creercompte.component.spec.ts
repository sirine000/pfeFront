import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREERCompteComponent } from './creercompte.component';

describe('CREERCompteComponent', () => {
  let component: CREERCompteComponent;
  let fixture: ComponentFixture<CREERCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CREERCompteComponent]
    });
    fixture = TestBed.createComponent(CREERCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
