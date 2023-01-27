import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/starwars.interface";

@Injectable()
export class StarWarsService {
    private _personajes: Personaje[] = [
        {
          nombre: 'Chewbacca',
          poder: 10000
        },
        {
          nombre: 'R2',
          poder: 6000, 
        }
      ];
    
    public get personajes() : Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje ( personaje: Personaje) {
      this._personajes.push( personaje );
    }
}