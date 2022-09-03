import { Soundable } from "./Soundable"

export default class Pet implements Soundable{
    private _name: string
    private _age: number
    private _owner: string

    constructor(name: string, age: number, owner: string){
        this._name = name
        this._age = age
        this._owner = owner
    }

    get name(){
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get age (){
        return this._age
    }

    set age(age: number){
        this._age = age
    }

    get owner(){
        return this._owner
    }

    set owner(owner: string) {
        this._owner = owner
    }

    makeSound(): void{
    }

    viewNameTag(): void{
        console.log(`\n ***************\n Nombre: ${this.name}\n Owner: ${this.owner}\n ***************\n`)
    }
}