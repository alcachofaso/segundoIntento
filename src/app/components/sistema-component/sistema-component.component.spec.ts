import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaComponentComponent } from './sistema-component.component';

describe('SistemaComponentComponent', () => {
  let component: SistemaComponentComponent;
  let fixture: ComponentFixture<SistemaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
