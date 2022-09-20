import Board from "./Board";
import Input from "./Input";
import Player from "./Player";

export default class TicTacToe {
    private history: any;
    private board: Board;
    private playerArr: Player[];

    constructor() {
        this.board = new Board()
        this.playerArr = [];
        this.createPlayers()
    }

    async createPlayers() {
        let tmpPlayer: Player;
        let name: string;

        console.log('\nPlayer One...')
        name = (await this.createNametoPlayer()) as string
        tmpPlayer = new Player(name)
        this.playerArr.push(tmpPlayer)

        console.log('\nPlayer Two...')
        name = (await this.createNametoPlayer()) as string
        tmpPlayer = new Player(name)
        this.playerArr.push(tmpPlayer)

        this.playerArr.forEach(el => el.sayMyName())
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

    displayEnMessage() {

    }
}