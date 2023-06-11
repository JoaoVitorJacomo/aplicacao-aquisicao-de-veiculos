import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CardCarroComponent } from './card-carro/card-carro.component';
import { TopoComponent } from './topo/topo.component';
import { LoginComponent } from './login/login.component';
import { ErroComponent } from './erro/erro.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CardCarroComponent,
    TopoComponent,
    LoginComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
