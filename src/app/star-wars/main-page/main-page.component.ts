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
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  cambiarNombre( event: any ) {
    console.log(event.target.value);
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.personajes.push( this.nuevo )
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
