export default class Node<T> {
    public next: Node<T> | null = null;
    private _data: T;

    constructor(data: T) {
        this._data = data;
    }

    get value(): T {
        return this._data;
    }

}