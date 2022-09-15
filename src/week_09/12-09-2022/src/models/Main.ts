import Player from "./Player";

export default class Main {
    startGame(){
        const newPlayer = new Player('Edy');
        newPlayer.sayMyName()
    }

}