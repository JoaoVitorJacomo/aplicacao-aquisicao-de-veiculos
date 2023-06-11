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
  menuItemQuatro: string = "Sair";
  deslogar(){
    alert("Deslogando.");
  }
  abrirMenu(){
    let elemento = document.querySelector('html');
    if(elemento?.classList.contains("active")){
      elemento?.classList.remove("active");
    }else{
      elemento?.classList.add("active");
    }
  }
}
