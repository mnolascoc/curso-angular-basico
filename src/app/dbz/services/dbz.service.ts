import { Injectable } from '@angular/core';
import { Personaje } from '../model/personaje';

@Injectable()
export class DBZService {
  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 11000 },
  ];

  constructor() {
    console.log('servicio inicializado');
  }

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  agregarPersonaje(personaje: Personaje): void {
    this._personajes.push(personaje);
  }
}
