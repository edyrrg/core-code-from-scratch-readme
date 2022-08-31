# TypeScript

## exercise 01

``` TypeScript
class Tile {
    private _letter: string
    private _value: number

    constructor(letter: string, value:number) {
        this._letter = letter
        this._value = value
    }

    get letter(){
        return  this._letter
    }

    set letter(letter: string){
        this._letter = letter
    }

    get value(){
        return this._value
    }

    set value(value: number){
        this._value = value
    }

    printTile(): void{
        console.log(`\n***************\n  Letter: ${this._letter}\n  Value: ${this._value}\n***************\n`) 
    }
}
```

## exercise 02

``` TypeScript
class Time {
  private _hour: number
  private _minute: number
  private _second: number

  constructor(hour: number, minute: number, second: number){
    this._hour = hour
    this._minute = minute
    this._second = second
  }

  get hour(){
    return this._hour
  }

  set hour(hour: number){
    this._hour = hour
  }

  get minute(){
    return this._minute
  }

  set minute(minute: number){
    this._minute = minute
  }

  get second(){
    return this._second
  }

  set second(second: number){
    this._second = second
  }

  getInSeconds(): number{
    return (this._hour * 3600) + (this._minute * 60) + this._second
  }

  printTime(): void {
    console.log(`\n==================\n  Hours: ${this._hour}\n  Minutes: ${this._minute}\n  Seconds: ${this._second}\n ==================\n`)
  }
}

```

## exercise 03

``` TypeScript
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
```

[thursdayChallenge.ts](/src/week_06/25-08-2022/thursdayChallenge.ts)

[Regresar](/README.md)
