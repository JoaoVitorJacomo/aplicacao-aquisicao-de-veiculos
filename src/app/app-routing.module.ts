import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {LandPageComponent} from './land-page/land-page.component';
import {HomeComponent} from './home/home.component';
import {SobrePageComponent} from './sobre-page/sobre-page.component';
import {CadastroPageComponent} from './cadastro-page/cadastro-page.component';

const routes: Routes = [
  {path : 'app-land-page', component: LandPageComponent},
  {path : 'app-home', component: HomeComponent},
  {path : 'app-cadastro-page', component: CadastroPageComponent},
  {path : 'app-sobre-page', component: SobrePageComponent},
  { path: '', redirectTo: 'app-land-page', pathMatch: 'full' },
  { path: '**', component: LandPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
