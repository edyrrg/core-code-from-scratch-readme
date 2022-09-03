"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    constructor(name, age, owner) {
        this._name = name;
        this._age = age;
        this._owner = owner;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get owner() {
        return this._owner;
    }
    set owner(owner) {
        this._owner = owner;
    }
    makeSound() {
    }
    viewNameTag() {
        console.log(`\n ***************\n Nombre: ${this.name}\n Owner: ${this.owner}\n ***************\n`);
    }
}
exports.default = Pet;
