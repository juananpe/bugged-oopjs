import { Jugador } from "./jugador.js";

class Maquina extends Jugador{
    constructor(nombre){
        //max = 100, min = 1
        super(nombre, Math.floor(Math.random() * (100 - 1 + 1) + 1), 130);
    }
}

export {Maquina}