import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastra-aluno',
  templateUrl: './cadastra-aluno.component.html',
  styleUrls: ['./cadastra-aluno.component.css']
})
export class CadastraAlunoComponent implements OnInit {
  ra: number;
  nome: string;
  email: string;
  celular: number;

  inativo: boolean = false;
  estiloBotao: string = "btn btn-primary"
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ra = this.route.snapshot.params['ra'] ?? "";
    this.nome = this.route.snapshot.params['nome'] ?? "";
    this.email = this.route.snapshot.params['email'] ?? "";
    this.celular = this.route.snapshot.params['celular'] ?? "";

  }
  cadastrar() {
    if (this.ra == null || this.nome == "" || this.email == "" || this.celular == null) {
      alert("Os campos não podem retornar vazios");
    }
    else {
      alert("Aluno: '" + this.nome + "' cadastrado com sucesso!\n\n" +
        "RA: " + this.ra + "'" +
        "\nNome: '" + this.nome + "'" +
        "\nE-mail: '" + this.email + "'" +
        "\nCelular: '" + this.celular + "'");
    }
  }

}
