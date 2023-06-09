import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandPageComponent} from './land-page/land-page.component';
import {HomeComponent} from './home/home.component';
import {CadastroPageComponent} from './cadastro-page/cadastro-page.component'

const routes: Routes = [
  {path : 'app-land-page', component: LandPageComponent},
  // {path : '', component: HomeComponent},
  {path : '', component: CadastroPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
