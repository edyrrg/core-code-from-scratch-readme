export default class Player {
    private _nickName: string
    constructor(nickName: string) {
        this._nickName = nickName
    }

    get nickName() {
        return this._nickName
    }

    set nickName(nickName: string){
        this._nickName = nickName
    }

    sayMyName() {
        console.log(`My name is ${this.nickName}`)
    }
}