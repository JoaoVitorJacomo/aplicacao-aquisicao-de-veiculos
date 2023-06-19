import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CardCarroComponent } from './card-carro/card-carro.component';
import { TopoComponent } from './topo/topo.component';
import { LandPageComponent } from './land-page/land-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginTemplateComponent } from './login-template/login-template.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CardCarroComponent,
    TopoComponent,
    LandPageComponent,
    HomeComponent,
    LoginTemplateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
