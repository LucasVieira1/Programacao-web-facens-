import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  num1: number;
  num2: number;
  resultado: number;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.num1 = this.route.snapshot.params['num1'] ?
      parseFloat(this.route.snapshot.params['num1']) : 0;
    this.num2 = this.route.snapshot.params['num2'] ?
      parseFloat(this.route.snapshot.params['num2']) : 0;
    }
    somar(){
      this.resultado = this.num1 + this.num2;
    }
    subtrair(){
      this.resultado = this.num1 - this.num2;
    }
    dividir(){
      this.resultado = this.num1 / this.num2;
    }
    multiplicar(){
      this.resultado = this.num1 * this.num2;
    }
  

}
