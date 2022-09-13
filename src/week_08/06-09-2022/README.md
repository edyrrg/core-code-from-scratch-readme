# What's abstract class?

Abstract classes are like a mixture of implementing interfaces and extending a class in one step. You can create a class with optional methods and properties, but also indicate which methods and properties must be implemented in the derived class. Note that your base class, despite enforcing abstract rules, is still able to itself implement any interfaces you desire.

Use the abstract keyword to indicate a class contains abstract methods or properties.

[source](https://sbcode.net/typescript/abstract_classes/)

## How's abstract class in TypeScript?

Define an abstract class in Typescript using the abstract keyword. Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.

An abstract class typically includes one or more abstract methods or property declarations. The class which extends the abstract class must define all the abstract methods.

``` TypeScript
abstract class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}
```

[source](https://www.tutorialsteacher.com/typescript/abstract-class)
