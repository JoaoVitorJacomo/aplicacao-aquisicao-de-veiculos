import { Component } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent {
   menuItemUm: string = "Cadastros";
   menuItemDois: string = "Sobre nós";
   menuItemTres: string = "Cadastrar Veículo";
   menuItemQuatro: string = "Deslogar";
   deslogar(){
     alert("Deslogando.");
   }
   desaparecerMenu(){
    let elemento = document.querySelector('.bg-menu');
    let menuLateralTopo = document.querySelector('.topo .container');
    elemento?.setAttribute('style','display:none;');
    menuLateralTopo?.setAttribute('style','left:-250px;');
   }
   abrirMenu(){
     let elemento = document.querySelector('html');
     let bgMenu = document.querySelector('.bg-menu');
     let menuLateralTopo = document.querySelector('.topo .container');
     if(elemento?.classList.contains("active")){
       elemento?.classList.remove("active");
     }else{
        bgMenu?.setAttribute('style','display:block;');
        menuLateralTopo?.setAttribute('style','left:0px;');
        elemento?.classList.add("active");
     }
   }
}
