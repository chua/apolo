import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionInvestigadoDsvComponent } from './informacion-investigado-dsv.component';

describe('InformacionInvestigadoDsvComponent', () => {
  let component: InformacionInvestigadoDsvComponent;
  let fixture: ComponentFixture<InformacionInvestigadoDsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionInvestigadoDsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionInvestigadoDsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
