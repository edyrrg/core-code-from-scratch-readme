"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Pet_1 = __importDefault(require("./Pet"));
class Dog extends Pet_1.default {
    constructor(name, age, owner) {
        super(name, age, owner);
    }
    makeSound() {
        console.log(`${this.name} esta ladrando`);
    }
}
exports.Dog = Dog;
