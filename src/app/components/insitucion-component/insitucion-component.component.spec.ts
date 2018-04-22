import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsitucionComponentComponent } from './insitucion-component.component';

describe('InsitucionComponentComponent', () => {
  let component: InsitucionComponentComponent;
  let fixture: ComponentFixture<InsitucionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsitucionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsitucionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
