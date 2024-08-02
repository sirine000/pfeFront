import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnecterformateurComponent } from './connecterformateur.component';

describe('ConnecterformateurComponent', () => {
  let component: ConnecterformateurComponent;
  let fixture: ComponentFixture<ConnecterformateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnecterformateurComponent]
    });
    fixture = TestBed.createComponent(ConnecterformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
