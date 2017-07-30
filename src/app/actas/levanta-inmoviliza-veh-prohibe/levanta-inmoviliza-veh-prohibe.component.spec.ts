import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevantaInmovilizaVehProhibeComponent } from './levanta-inmoviliza-veh-prohibe.component';

describe('LevantaInmovilizaVehProhibeComponent', () => {
  let component: LevantaInmovilizaVehProhibeComponent;
  let fixture: ComponentFixture<LevantaInmovilizaVehProhibeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevantaInmovilizaVehProhibeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevantaInmovilizaVehProhibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
