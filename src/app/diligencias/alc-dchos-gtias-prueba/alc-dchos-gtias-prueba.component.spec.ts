import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcDchosGtiasPruebaComponent } from './alc-dchos-gtias-prueba.component';

describe('AlcDchosGtiasPruebaComponent', () => {
  let component: AlcDchosGtiasPruebaComponent;
  let fixture: ComponentFixture<AlcDchosGtiasPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcDchosGtiasPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcDchosGtiasPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
