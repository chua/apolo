import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcDeterminacionGradoComponent } from './alc-determinacion-grado.component';

describe('AlcDeterminacionGradoComponent', () => {
  let component: AlcDeterminacionGradoComponent;
  let fixture: ComponentFixture<AlcDeterminacionGradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcDeterminacionGradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcDeterminacionGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
