import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercycletestComponent } from './ajoutercycletest.component';

describe('AjoutercycletestComponent', () => {
  let component: AjoutercycletestComponent;
  let fixture: ComponentFixture<AjoutercycletestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutercycletestComponent]
    });
    fixture = TestBed.createComponent(AjoutercycletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
