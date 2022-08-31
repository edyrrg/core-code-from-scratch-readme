class Tile {
    private _letter: string
    private _value: number

    constructor(letter: string, value: number) {
        this._letter = letter
        this._value = value
    }

    get letter() {
        return this._letter
    }

    set letter(letter: string) {
        this._letter = letter
    }

    get value() {
        return this._value
    }

    set value(value: number) {
        this._value = value
    }

    printTile(): void {
        console.log(`\n***************\n  Letter: ${this._letter}\n  Value: ${this._value}\n***************\n`)
    }
}

class Main {
    start() {
        const A = new Tile('A', 10);
        A.printTile(); // Example of a reader-friendly format above
        /*
          ==================
            Letter: A
            Value: 10
          ==================
        */
        const W = new Tile('W', 50); // This should show and error
    }
}

const main = new Main();
main.start();

class Time {
    private _hour: number
    private _minute: number
    private _second: number

    constructor(hour: number, minute: number, second: number) {
        this._hour = hour
        this._minute = minute
        this._second = second
    }

    get hour() {
        return this._hour
    }

    set hour(hour: number) {
        this._hour = hour
    }

    get minute() {
        return this._minute
    }

    set minute(minute: number) {
        this._minute = minute
    }

    get second() {
        return this._second
    }

    set second(second: number) {
        this._second = second
    }

    getInSeconds(): number {
        return (this._hour * 3600) + (this._minute * 60) + this._second
    }

    printTime(): void {
        console.log(`\n==================\n  Hours: ${this._hour}\n  Minutes: ${this._minute}\n  Seconds: ${this._second}\n ==================\n`)
    }
}

class Main2 {
    start() {
        const t = new Time(10, 45, 1);
        t.printTime(); // Example of a reader-friendly format above
        /*
          ==================
            Hours: 10
            Minutes: 45
            Seconds: 1
          ==================
        */
        console.log(t.getInSeconds()); // 38701
    }
}

const main2 = new Main2();
main2.start();

class Rational {
    private _numerator: number
    private _denominator: number

    constructor(numerator: number, denomitador: number) {
        this._numerator = numerator
        this._denominator = denomitador
    }

    get numerator() {
        return this._numerator
    }

    set numerator(numerator: number) {
        this._numerator = numerator
    }

    get denominator() {
        return this._denominator
    }

    set denominator(denominator) {
        this._denominator = denominator
    }

    printRational(): void {
        console.log(`${this._numerator} / ${this._denominator}`)
    }

    invert(): void {
        let aux: number = this.numerator
        this._numerator = this._denominator
        this._denominator = aux
    }

    toFloat(): number {
        return (this._numerator / this._denominator)
    }

    reduce() {
        let gcd = this.gcd(this._numerator, this._denominator)
        this._numerator = this._numerator / gcd
        this._denominator = this._denominator / gcd
    }

    private gcd(a: number, b: number): number {
        if (a == 0)
            return b;
        return this.gcd(b % a, a);
    }
}

class Main3 {
    start() {
        const r1 = new Rational(36, 120);
        r1.printRational(); // 36 / 120
        console.log(r1.toFloat()); // 0.3
        r1.reduce();
        r1.printRational(); // 3 / 10
        r1.invert();
        r1.printRational(); // 10 / 3
        r1.reduce();
        r1.printRational(); // 10 / 3
    }
}

const main3 = new Main3();
main3.start();