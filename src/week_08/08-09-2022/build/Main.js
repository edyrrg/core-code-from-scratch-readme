"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./LinkedList"));
class Main {
    start() {
        let list = new LinkedList_1.default();
        list.add(1); // [1]
        list.add(2); // [1,2]
        list.add(3); // [1,2,3]
        list.add(4); // [1,2,3,4]
        list.addFirst(5); // [5,1,2,3,4]
        console.log(list.toString()); // [5,1,2,3,4]
        console.log(list.size); // 5
        list.remove(); // [1,2,3,4]
        console.log(list.toString()); // [1,2,3,4]
        console.log(list.size); // 4
        list.removeLast(); // [1,2,3]
        console.log(list.toString()); // [1,2,3]
        console.log(list.size); // 3
    }
}
const main = new Main();
main.start();
