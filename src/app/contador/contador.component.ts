import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html',
})
export class ContadorComponent {
  title = 'Contador App';
  contador: number = 0;
  base: number = 5;

  aumentarContador(value: number) {
    this.contador += value;
  }

  disminuirContador(value: number) {
    this.contador -= value;
  }

  acumular(value: number) {
    this.contador += value;
  }
}
