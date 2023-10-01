import { Persona } from "./persona.model";

export class PersonasService{
    personas:Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez"), new Persona("Karla", "Lara")]; 

    personaAgregada(persona:Persona){
        this.personas.push(persona);
    }
    encontrarPersona(index:number){
        let persona:Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }

    eliminarPersona(index:number){
        this.personas.splice(index,1);
    }
}