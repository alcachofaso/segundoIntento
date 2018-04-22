import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteInsitucionComponent } from './docente-insitucion.component';

describe('DocenteInsitucionComponent', () => {
  let component: DocenteInsitucionComponent;
  let fixture: ComponentFixture<DocenteInsitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteInsitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteInsitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
