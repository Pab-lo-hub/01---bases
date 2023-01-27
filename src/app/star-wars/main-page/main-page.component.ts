import { Component } from '@angular/core';
import { Personaje } from '../interfaces/starwars.interface';
import { StarWarsService } from '../services/starwars.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Yoda',
    poder: 300000,
  }

  constructor() {   
  }
}
