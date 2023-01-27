import { Component } from '@angular/core';
import { Personaje } from '../interfaces/starwars.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Chewbacca',
      poder: 10000
    },
    {
      nombre: 'R2',
      poder: 6000, 
    }
  ];

  nuevo: Personaje = {
    nombre: 'Yoda',
    poder: 300000,
  }

  agregarNuevoPersonaje(argumento: Personaje){
    console.log(argumento);
    this.personajes.push(argumento)
  }
}
