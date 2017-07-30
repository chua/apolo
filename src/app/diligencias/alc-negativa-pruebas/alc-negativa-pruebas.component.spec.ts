import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcNegativaPruebasComponent } from './alc-negativa-pruebas.component';

describe('AlcNegativaPruebasComponent', () => {
  let component: AlcNegativaPruebasComponent;
  let fixture: ComponentFixture<AlcNegativaPruebasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcNegativaPruebasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcNegativaPruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
