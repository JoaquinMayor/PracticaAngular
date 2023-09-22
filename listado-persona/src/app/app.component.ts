import { Component } from '@angular/core';
import {Persona} from "./persona.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';
  nombreInput:string = "";
  apellidoInput:string = "";
  personas:Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez"), new Persona("Karla", "Lara")]; 

   agregarPersona():void{
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona);
  }
}