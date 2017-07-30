import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestaLibertadComponent } from './puesta-libertad.component';

describe('PuestaLibertadComponent', () => {
  let component: PuestaLibertadComponent;
  let fixture: ComponentFixture<PuestaLibertadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuestaLibertadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestaLibertadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
