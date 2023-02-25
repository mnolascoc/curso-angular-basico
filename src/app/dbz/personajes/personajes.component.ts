import { Component, Input } from '@angular/core';
import { Personaje } from '../model/personaje';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  //@Input()
  // personajes: Personaje[] = [];

  constructor(private dbzService: DBZService) {}

  get personajes() {
    return this.dbzService.personajes;
  }
}
