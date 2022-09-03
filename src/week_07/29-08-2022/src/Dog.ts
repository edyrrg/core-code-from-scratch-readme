import Pet from "./Pet";

export class Dog extends Pet{
    constructor(name:string, age:number, owner: string){
        super(name, age, owner)
    }
    makeSound() {
        console.log(`${this.name} esta ladrando`)
    }
}