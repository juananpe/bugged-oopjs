export {Jugador}

class Jugador {
    constructor(nombre, fuerza, salud){
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.salud = salud;
    }

    get nombreJugador(){

    }

    luchar(jugador){
        if (Math.random() * this.fuerza > jugador.fuerza) {
            jugador.salud -= this.fuerza;
        }
        else {
            this.salud -= jugador.fuerza;
        }
    }
}