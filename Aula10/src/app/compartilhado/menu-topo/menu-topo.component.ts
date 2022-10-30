import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {
  @Input() estaAutenticado: boolean = false;

  menus: any = [
    { rota: 'calculadora', titulo: 'Calculadora' },
    { rota: 'media', titulo: 'Calcular Média' },
    { rota: 'cadastraAluno', titulo: 'Cadastrar aluno' },
    { rota: 'apolice', titulo: 'Apólice de Seguro' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
