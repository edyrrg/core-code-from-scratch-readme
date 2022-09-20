import Board from "./Board";
import Player from "./Player";
import Input, { SelectChoices } from "./Input";
import TicTacToe from "./TicTacToe";

export default class Main {
    private band: boolean;
    private game: TicTacToe;

    constructor() {
        this.game = new TicTacToe()
        this.band = false
    }

    async init() {
        let res: any;

        const selectChoices: SelectChoices = [
            { option: 1, message: 'Start Game' },
            { option: 2, message: 'Show Last Game' },
            { option: 3, message: 'Exit Game' }
        ];

        const rp = await this.game.createPlayers()

        while (this.band == false) {
            this.displayMenu()
            res = await Input.getSelect("Select Option ", selectChoices)
            this.selectOption(res.data)
        }
    }

    selectOption(index: number) {
        switch (index) {
            case 1:
                this.startGame()
                break;
            case 2:
                this.showLastGame()
                break;
            case 3:
                this.displayGoodByeMsg()
                this.band = true
                break;
            default:
                console.error('opcion incorrecta, mejor tu codigo no esta haciendo lo que quieres... :c')
        }
    }

    showLastGame() {
        console.log('\nmostrando ultima partida...\n')
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

    displayGoodByeMsg() {
        let separator: string = '#'
        console.log(`\n${separator.repeat(42)}`)
        console.log(`${separator.repeat(2)} 👋 Thanks for play TicTacToe Game 👋 ${separator.repeat(2)}`)
        console.log(`${separator.repeat(42)}\n`)
    }
}