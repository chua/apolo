import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechosInvestigadoComponent } from './derechos-investigado.component';

describe('DerechosInvestigadoComponent', () => {
  let component: DerechosInvestigadoComponent;
  let fixture: ComponentFixture<DerechosInvestigadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerechosInvestigadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerechosInvestigadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
