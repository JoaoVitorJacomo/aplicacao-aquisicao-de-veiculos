import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ErroComponent } from "./erro/erro.component";

const routes: Routes = [
    {path: 'home', component : AppComponent},
    {path: 'login', component : LoginComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: ErroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}