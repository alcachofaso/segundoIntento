import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInstitucionComponent } from './inicio-institucion.component';

describe('InicioInstitucionComponent', () => {
  let component: InicioInstitucionComponent;
  let fixture: ComponentFixture<InicioInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
