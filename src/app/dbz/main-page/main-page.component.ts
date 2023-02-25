import { Component, OnInit } from '@angular/core';
import { Personaje } from '../model/personaje';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private dbzService: DBZService) {}

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  ngOnInit() {}

  agregarNuevo(personaje: Personaje): void {
    this.dbzService.agregarPersonaje(personaje);
  }
}
