import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAsistJuridicaResumidaComponent } from './info-asist-juridica-resumida.component';

describe('InfoAsistJuridicaResumidaComponent', () => {
  let component: InfoAsistJuridicaResumidaComponent;
  let fixture: ComponentFixture<InfoAsistJuridicaResumidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAsistJuridicaResumidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAsistJuridicaResumidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
