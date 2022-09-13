"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(data) {
        this.next = null;
        this._data = data;
    }
    get value() {
        return this._data;
    }
}
exports.default = Node;
