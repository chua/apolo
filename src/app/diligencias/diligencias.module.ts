import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './diligencias.routing';

import { TodasDiligenciasComponent } from './todas-diligencias.component';
import { CedulaCitacionJrDsvComponent } from './cedula-citacion-jr-dsv/cedula-citacion-jr-dsv.component';
import { AlcComparecenciaDsvComponent } from './alc-comparecencia-dsv/alc-comparecencia-dsv.component';
import { AlcDchosGtiasPruebaComponent } from './alc-dchos-gtias-prueba/alc-dchos-gtias-prueba.component';
import { AlcDeterminacionGradoComponent } from './alc-determinacion-grado/alc-determinacion-grado.component';
import { AlcNegativaPruebasComponent } from './alc-negativa-pruebas/alc-negativa-pruebas.component';
import { DerechosInvestigadoComponent } from './derechos-investigado/derechos-investigado.component';
import { DerechosDetenidoComponent } from './derechos-detenido/derechos-detenido.component';
import { DeclaracionConductorDsvComponent } from './declaracion-conductor-dsv/declaracion-conductor-dsv.component';
import { PuestaLibertadComponent } from './puesta-libertad/puesta-libertad.component';
import { InformacionInvestigadoDsvComponent } from './informacion-investigado-dsv/informacion-investigado-dsv.component';
import { ValidezPncUkAprendizajeComponent } from './validez-pnc-uk-aprendizaje/validez-pnc-uk-aprendizaje.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TodasDiligenciasComponent,
    CedulaCitacionJrDsvComponent,
    AlcComparecenciaDsvComponent,
    AlcDchosGtiasPruebaComponent,
    AlcDeterminacionGradoComponent,
    AlcNegativaPruebasComponent,
    DerechosInvestigadoComponent,
    DerechosDetenidoComponent,
    DeclaracionConductorDsvComponent,
    PuestaLibertadComponent,
    InformacionInvestigadoDsvComponent,
    ValidezPncUkAprendizajeComponent
    
  ],
  exports: [
    CedulaCitacionJrDsvComponent,
    AlcComparecenciaDsvComponent,
    AlcDchosGtiasPruebaComponent,
    AlcDeterminacionGradoComponent,
    AlcNegativaPruebasComponent,
    DerechosInvestigadoComponent,
    DerechosDetenidoComponent,
    DeclaracionConductorDsvComponent,
    PuestaLibertadComponent,
    InformacionInvestigadoDsvComponent,
    ValidezPncUkAprendizajeComponent

  ]
})
export class DiligenciasModule { }
