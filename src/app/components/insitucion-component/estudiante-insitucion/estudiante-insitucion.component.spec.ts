import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteInsitucionComponent } from './estudiante-insitucion.component';

describe('EstudianteInsitucionComponent', () => {
  let component: EstudianteInsitucionComponent;
  let fixture: ComponentFixture<EstudianteInsitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteInsitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteInsitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
