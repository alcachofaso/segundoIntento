import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteComponentComponent } from './docente-component.component';

describe('DocenteComponentComponent', () => {
  let component: DocenteComponentComponent;
  let fixture: ComponentFixture<DocenteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
