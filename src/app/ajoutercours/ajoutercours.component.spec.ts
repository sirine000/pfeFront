import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercoursComponent } from './ajoutercours.component';

describe('AjoutercoursComponent', () => {
  let component: AjoutercoursComponent;
  let fixture: ComponentFixture<AjoutercoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutercoursComponent]
    });
    fixture = TestBed.createComponent(AjoutercoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
