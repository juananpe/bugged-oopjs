import { Jugador } from "./jugador.js";

class Extraterrestre extends Jugador{
    constructor(nombre){
        //max = 85, min = 1
        super(nombre, Math.floor(Math.random() * (85 - 1 + 1) + 1), 150);
    }

    voltearNombre(){
        this.nombre = this.nombre.split("").reverse().join("")
    }

}

export {Extraterrestre}