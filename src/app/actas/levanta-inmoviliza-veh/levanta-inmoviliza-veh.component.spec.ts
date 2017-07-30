import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevantaInmovilizaVehComponent } from './levanta-inmoviliza-veh.component';

describe('LevantaInmovilizaVehComponent', () => {
  let component: LevantaInmovilizaVehComponent;
  let fixture: ComponentFixture<LevantaInmovilizaVehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevantaInmovilizaVehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevantaInmovilizaVehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
