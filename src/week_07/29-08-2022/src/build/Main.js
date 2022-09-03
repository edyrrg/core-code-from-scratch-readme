"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const Cat_1 = require("./Cat");
class Main {
    start() {
        let pet1 = new Dog_1.Dog('Maximus', 5, 'Oscar');
        let pet2 = new Cat_1.Cat('Kira', 4, 'Linda');
        pet1.makeSound();
        pet1.viewNameTag();
        pet2.makeSound();
        pet2.viewNameTag();
    }
}
exports.default = Main;
