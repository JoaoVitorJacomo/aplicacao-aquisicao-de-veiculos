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
  onClick(){
    alert("Deslogando.");
  }
}
