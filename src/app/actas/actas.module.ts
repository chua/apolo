import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes }  from './actas.routing';


import { TodasActasComponent } from './todas-actas.component';
import { InmovilizaVehAtestadosComponent } from './inmoviliza-veh-atestados/inmoviliza-veh-atestados.component';
import { LevantaInmovilizaVehProhibeComponent } from './levanta-inmoviliza-veh-prohibe/levanta-inmoviliza-veh-prohibe.component';
import { LevantaInmovilizaVehComponent } from './levanta-inmoviliza-veh/levanta-inmoviliza-veh.component';
import { InfoAsistJuridicaResumidaComponent } from './info-asist-juridica-resumida/info-asist-juridica-resumida.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
   // BrowserModule,
   // FormsModule
  ],
  declarations: [
    TodasActasComponent,
    InmovilizaVehAtestadosComponent,
    LevantaInmovilizaVehProhibeComponent,
    LevantaInmovilizaVehComponent,
    InfoAsistJuridicaResumidaComponent
  ],
  exports: [
    InmovilizaVehAtestadosComponent,
    LevantaInmovilizaVehProhibeComponent,
    LevantaInmovilizaVehComponent,
    InfoAsistJuridicaResumidaComponent
  ]

})
export class ActasModule { }

