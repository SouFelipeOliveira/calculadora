import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div id="container">
      <h1>Calculadora</h1>
      <ion-input fill="outline" type="string" [(ngModel)]="numberOne" ></ion-input>
      <ion-input fill="outline" [(ngModel)]="operacao"></ion-input>
      <ion-input fill="outline" type="string" [(ngModel)]="numberTwo" ></ion-input>
      <ion-button *ngIf="operacao !== '+'" (click)="ativarOperacao('+')">+</ion-button>
      <ion-button *ngIf="operacao !== '-'" (click)="ativarOperacao('-')">-</ion-button>
      <ion-button *ngIf="operacao !== '*'" (click)="ativarOperacao('*')">*</ion-button>
      <ion-button *ngIf="operacao !== '/'" (click)="ativarOperacao('/')">/</ion-button><br><br>
      <ion-button (click)="realizarOperacao(numberOne, numberTwo)">Calcular</ion-button>
      <ion-button (click)="ativarLimpar()">Limpar</ion-button><br><br>
      <h2 *ngIf="resultado !== 0">Resutlado: {{resultado}}</h2>
  </div>
  `,
  styles: [`
    #container {
      text-align: center;
      padding: 20px;
    }
  `]
})
export class HomePage {

  constructor() {}

  operacao: string = "";
  numberOne: string = "";
  numberTwo: string = "";
  resultado: number = 0;
  

  ativarLimpar(){
    this.operacao = "";
  }
  
  ativarOperacao(operacao: string){
    switch(operacao){
      case "+":
        this.operacao = "+";
        break;
      case "-":
        this.operacao = "-";
        break;
      case "*":
        this.operacao = "*";
        break;
      case "/":
        this.operacao = "/";
        break;
    }
  }

  realizarOperacao(numberOne: string, numberTwo: string){
    switch(this.operacao){
      case "+":
        this.resultado = parseInt(numberOne) + parseInt(numberTwo);
        break;
      case "-":
        this.resultado = parseInt(numberOne) - parseInt(numberTwo);
        break;
      case "*":
        this.resultado = parseInt(numberOne) * parseInt(numberTwo);
        break;
      case "/":
        this.resultado = parseInt(numberOne) / parseInt(numberTwo);
        break;
    }
  }
}
