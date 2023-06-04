import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CardCarroComponent } from './card-carro/card-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CardCarroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
