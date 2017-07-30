import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { AppComponent } from './app.component';

/* Feature Modules */
import { ClipboardModule } from 'ngx-clipboard'; //Permite copiar al portapapeles

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
