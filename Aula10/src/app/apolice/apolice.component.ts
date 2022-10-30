import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent implements OnInit {
  nome: string;
  sexo: string;
  idade: number;
  valor: number;
  apolice: number;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nome = this.route.snapshot.params['nome'] ?? "";
    this.sexo = this.route.snapshot.params['sexo'] ?? "";
    this.idade = this.route.snapshot.params['idade'] ?? "";
    this.valor = this.route.snapshot.params['valor'] ?? "";
  }
  calcular() {
    if (this.nome == "" || this.sexo == "" || this.idade == null || this.valor == null) {
      alert("Os campos não podem retornar vazios!");
    }
    else {
      if (this.sexo == "M" && this.idade <= 25) {
        this.apolice = ((this.valor * 15) / 100);
      }
      else if (this.sexo == "M" && this.idade > 25) {
        this.apolice = ((this.valor * 10) / 100);
      }
      else {
        this.apolice = ((this.valor * 8) / 100);
      }

    }

  }

}
