import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/starwars.interface';
import { StarWarsService } from '../services/starwars.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  constructor( private StarWarsService: StarWarsService) {}

  cambiarNombre( event: any ) {
    console.log(event.target.value);
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    // this.onNuevoPersonaje.emit( this.nuevo )
    this.StarWarsService.agregarPersonaje( this.nuevo )
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
