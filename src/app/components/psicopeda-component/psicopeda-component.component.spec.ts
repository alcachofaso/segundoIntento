import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicopedaComponentComponent } from './psicopeda-component.component';

describe('PsicopedaComponentComponent', () => {
  let component: PsicopedaComponentComponent;
  let fixture: ComponentFixture<PsicopedaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsicopedaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicopedaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
