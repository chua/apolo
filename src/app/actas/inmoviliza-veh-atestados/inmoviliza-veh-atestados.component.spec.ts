import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmovilizaVehAtestadosComponent } from './inmoviliza-veh-atestados.component';

describe('InmovilizaVehAtestadosComponent', () => {
  let component: InmovilizaVehAtestadosComponent;
  let fixture: ComponentFixture<InmovilizaVehAtestadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmovilizaVehAtestadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmovilizaVehAtestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
