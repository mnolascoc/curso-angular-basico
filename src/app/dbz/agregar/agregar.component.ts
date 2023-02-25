import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../model/personaje';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  //@Output()
  //nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DBZService) {}

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);
    //this.nuevoPersonaje.emit(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }
}
