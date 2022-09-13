# Exercise

* addFirst: Adds a new node at the start of the structure
* removeLast: Removes the last node of the structure

## Solution

``` TypeScript
    public addFirst(value: T) {
        if (this.head === null) {
            this.add(value);
        } else {
            let node = new Node(value);
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    public removeLast(): void {
        if (this.head !== null) {
            let node = this.head;
            let previous: Node<T> = node;
            while (node.next !== null) {
                previous = node;
                node = node.next;
            }
            previous.next = null;
            this.length--;
        }
    }
```

[LinkedList.ts](/src/week_08/08-09-2022/src/LinkedList.ts)

[Regresar](/README.md)
