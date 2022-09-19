export default class Board {
    private _board: number[][];

    constructor() {
        this._board = this.createAndClearBoard()
    }


    get board(): number[][] {
        return this._board;
    }

    set board(board: number[][]) {
        this._board = board
    }

    /**
     * initialize biodiomensional array
     * @param board bidimensional array to initialize
     */
    private initArrayBoard(board: number[][]) {
        for (let i = 0; i < 3; i++) {
            board.push(new Array(3))
        }
    }
    /**
     * call initArrayBoard to initialize array and fully array with -1
     * @returns array of numbers for board
     */
    private createAndClearBoard(): number[][] {
        let board: number[][] = []
        this.initArrayBoard(board)
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                board[i][j] = -1
            }
        }
        return board;
    }

    /**
     * select type of char to add var string
     * @param code number about code for selection type of char
     * @returns selection char
     */
    private selectSquare(code: number): string {
        switch (code) {
            case -1:
                return ' '
            case 1:
                return 'X'
            case 0:
                return 'O'
            default:
                return 'Err'
        }
    }

    resetBoard() {
        this.board = this.createAndClearBoard()
    }

    printer() {
        let board: number[][] = this.board
        let linea: string = '';
        console.log('\n')
        for (let i = 0; i < 3; i++) {
            linea += "\t"
            for (let j = 0; j < 3; j++) {
                let square: string = this.selectSquare(board[i][j])
                if (j < 2)
                    linea += ` ${square} |`
                if (j === 2)
                    linea += ` ${square}`
            }
            if (linea.length > 0)
                console.log(linea)
            if (i < 2)
                console.log("\t-----------")
            linea = ''
        }
        console.log('\n')
    }
}