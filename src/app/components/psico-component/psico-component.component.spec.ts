import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicoComponentComponent } from './psico-component.component';

describe('PsicoComponentComponent', () => {
  let component: PsicoComponentComponent;
  let fixture: ComponentFixture<PsicoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsicoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
