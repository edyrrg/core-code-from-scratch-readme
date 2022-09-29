import Board from "./Board";
import Input from "./Input";
import Player from "./Player";

export default class TicTacToe {
    private history: any;
    private endGame: boolean;
    private board: Board;
    private _players: Player[];

    constructor() {
        this.board = new Board()
        this._players = new Array(2);
        this.endGame = false;
    }

    get players(): Player[] {
        return this._players
    }

    async createPlayers() {
        // let tmpPlayer: Player;
        let name: string;

        for (let i = 0; i < this.players.length; i++) {
            console.log('\nPlayer...')
            name = (await this.createNametoPlayer()) as string
            this.players[i] = new Player(name)
        }

        this.players.forEach(el => el.sayMyName())
    }

    checkGoodName(nameValidate: string) {
        let regex = /([a-zA-Z]{3,20})/

        if (regex.test(nameValidate)) {
            return true;
        }
        return false;
    }

    async createNametoPlayer(): Promise<String> {
        let res: any;
        let isOkay: boolean = false
        while (!isOkay) {
            res = await Input.getInput(`What's your name ...`);
            isOkay = this.checkGoodName(res.data.toString())
            if (!isOkay) {
                console.log("\n⚠ Invalid name, pls try again ⚠\n")
            }
        }
        return res.data.toString()
    }

    displayGame() {
        this.board.printer(this.players)
    }

    startGame() {
        while(this.endGame){
            
        }
    }

    isEndGame(){
        
    }

    displayEndMessage() {

    }

    move() {

    }
}