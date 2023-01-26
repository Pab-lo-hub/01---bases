import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Skywalker Luke',
    poder: 20000,
  }

  cambiarNombre( event: any ) {
    console.log(event.target.value);
  }

  agregar() {
    console.log(this.nuevo);
  }
}
