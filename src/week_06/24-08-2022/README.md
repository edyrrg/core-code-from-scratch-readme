# TypeScript Challenge / Codewars

## A Rule of Divisibility by 13

``` TypeScript
export function thirt(n: number): number {
  // your code
  let arrayNumbers: number[] = n
    .toString()
    .split('')
    .map((item: string) => parseInt(item))
    .reverse()

  let arrayOfMods: number[] = howMuchModByThirt(arrayNumbers.length)

  let arrayResult: number [] = []
  for(let i: number = 0; i < arrayNumbers.length; i++){
    arrayResult.push(arrayNumbers[i] * arrayOfMods[i])
  }

  let result: number = arrayResult.reduce((previus: number, current: number) => previus + current)

  if(result === n){
    return result
  }

  return thirt(result)
}

export function howMuchModByThirt(n: number): number[] {
  let arrayOfMods: number [] = []
  for(let i: number = 0; i < n; i++){
    arrayOfMods.push((10 ** i) % 13)
  }
  return arrayOfMods
}
```

## Playing with digits

``` TypeScript
export class G964 {

    public static digPow = (n: number, p: number) => {
        // your code
        let res: number = n
          .toString()
          .split('')
          .map(item => Number(item) ** p++)
          .reduce((pre, curr) => pre + curr)
        return (res % n === 0)? (res / n) : -1;
    }
}
```

[wednesdayChallenge.ts](/src/week_06/24-08-2022/wednesdayChallenge.ts)

[Regresar](/README.md)
