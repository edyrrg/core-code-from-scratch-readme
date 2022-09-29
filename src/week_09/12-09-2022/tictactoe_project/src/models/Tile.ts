import Player from "./Player"

export class Tile {
    static separator: string = ':'

    static displayBanner(listPlayer: Player[]) {
        console.log(`\n${this.separator.repeat(35)}`)
        listPlayer.forEach((el, index) => {
            console.log(`\tPlayer ${index + 1}: ${el.nickName}`)
        })
        console.log(`${this.separator.repeat(35)}\n`)
    }
}