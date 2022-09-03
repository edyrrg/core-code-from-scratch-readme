import { Dog } from "./Dog";
import Pet from "./Pet";
import { Cat } from './Cat'

export default class Main {
    start(): void{
        let pet1: Pet = new Dog('Maximus', 5, 'Oscar')
        let pet2: Pet = new Cat('Kira', 4, 'Linda')

        pet1.makeSound()
        pet1.viewNameTag()

        pet2.makeSound()
        pet2.viewNameTag()
    }
}