"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("./Node"));
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    get size() {
        return this.length;
    }
    add(value) {
        if (this.head == null) {
            this.head = new Node_1.default(value);
        }
        else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = new Node_1.default(value);
        }
        this.length++;
    }
    remove() {
        if (this.head !== null) {
            this.head = this.head.next;
            this.length--;
        }
    }
    addFirst(value) {
        if (this.head === null) {
            this.add(value);
        }
        else {
            let node = new Node_1.default(value);
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }
    removeLast() {
        if (this.head !== null) {
            let node = this.head;
            let previous = node;
            while (node.next !== null) {
                previous = node;
                node = node.next;
            }
            previous.next = null;
            this.length--;
        }
    }
    toString() {
        if (this.head === null)
            return '[]';
        let representation = '';
        let node = this.head;
        while (node.next !== null) {
            representation = `${representation}${JSON.stringify(node.value)},`;
            node = node.next;
        }
        representation = `${representation}${JSON.stringify(node.value)}`;
        representation = `[${representation}]`;
        return representation;
    }
}
exports.default = LinkedList;
