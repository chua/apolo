import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracionConductorDsvComponent } from './declaracion-conductor-dsv.component';

describe('DeclaracionConductorDsvComponent', () => {
  let component: DeclaracionConductorDsvComponent;
  let fixture: ComponentFixture<DeclaracionConductorDsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaracionConductorDsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracionConductorDsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
