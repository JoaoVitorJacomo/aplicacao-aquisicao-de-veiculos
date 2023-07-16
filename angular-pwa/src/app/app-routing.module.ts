import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {LandPageComponent} from './land-page/land-page.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path : 'app-land-page', component: LandPageComponent},
  { path: '', redirectTo: 'app-land-page', pathMatch: 'full' },
  { path: '**', component: LandPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
