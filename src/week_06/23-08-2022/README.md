# TypeScript Challenge / Codewars

## Square(n) Sum

``` TypeScript
export function squareSum(numbers: number[]): number {
  if(numbers.length == 0) return 0;
  let result: number = numbers.map((item: number) => Math.pow(item, 2))
  .reduce((previus: number, current: number) => previus + current);
  return result;
}
```

## A wolf in sheep's clothing

``` TypeScript
export function warnTheSheep(queue: string[]): string {
  let find: number;
  find = queue.indexOf('wolf')
  return (find + 1 == queue.length) ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${queue.length - (find + 1)}! You are about to be eaten by a wolf!`;
}
```

[tuesdayChallenge.ts](/src/week_06/23-08-2022/tuesdayChallenge.ts)

[Regresar](/README.md)
