import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionInsitucionComponent } from './informacion-insitucion.component';

describe('InformacionInsitucionComponent', () => {
  let component: InformacionInsitucionComponent;
  let fixture: ComponentFixture<InformacionInsitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionInsitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionInsitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
