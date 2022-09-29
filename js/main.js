import { Humano } from "./humano.js";
import { Extraterrestre } from "./extraterrestre.js";
import { Maquina } from "./maquina.js";

let campo = [150]

for(let i=1; i<=50; i++){
    campo.push(new Humano("h"+i), new Maquina("m"+i), new Extraterrestre("e"+i))
}

//Desordenamos el array
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//Mezclar jugadores
shuffleArray(campo)

while (campo.length > 1){
    //Filtrar los jugadores que sigan vivos
    campo = campo.filter(Jugador => Jugador.salud > 0)

    //Luchan llos jugadores de 2 en 2 (1º con 2º, 3º con 4º, etc.)
    for (let i=0; i<campo.length; i+=2){
        campo[i].luchar(campo[i+1])
    }

}