import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/starwars.interface';
import { StarWarsService } from '../services/starwars.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  //@Input() personajes: Personaje[] = [];

  get personajes() {
    return this.StarWarsService.personajes;
  }

  constructor ( private StarWarsService: StarWarsService) {
  }
}
