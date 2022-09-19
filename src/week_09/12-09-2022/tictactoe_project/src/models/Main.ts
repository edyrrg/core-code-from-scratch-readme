import Board from "./Board";
import Player from "./Player";
import Input, { SelectChoices } from "./Input";

export default class Main {
    private band: boolean;
    constructor() {
        this.band = false
    }

    async init() {
        let res: any;

        const selectChoices: SelectChoices = [
            { option: 1, message: 'Start Game' },
            { option: 2, message: 'Show Last Game' },
            { option: 3, message: 'Exit Game' }
        ];

        while (this.band == false) {
            this.displayMenu()
            res = await Input.getSelect("Select Option ", selectChoices)

            switch (res.data) {
                case 1:
                    this.startGame()
                    break;
                case 2:
                    //call ShowLastGame
                    break;
                case 3:
                    this.displayGoodByeMsg()
                    this.band = true
                    break;
                default:
                    console.log("Your selection is wrong! :C")
            }
        }
    }

    startGame() {
        const newPlayer = new Player('Edy');
        newPlayer.sayMyName()
        const newBoard = new Board()
        newBoard.printer()
    }

    displayMenu() {
        let separator: string = '*'
        console.log(`${separator.repeat(37)}`)
        console.log(`${separator.repeat(2)} 🚀 Welcome to TicTocToe Game 🚀 ${separator.repeat(2)}`)
        console.log(`${separator.repeat(37)}`)
        console.log('  MENU')
    }

    displayGoodByeMsg(){
        let separator: string = '#'
        console.log(`\n${separator.repeat(42)}`)
        console.log(`${separator.repeat(2)} 👋 Thanks for play TicTacToe Game 👋 ${separator.repeat(2)}`)
        console.log(`${separator.repeat(42)}\n`)
    }
}