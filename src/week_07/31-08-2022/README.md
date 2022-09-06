# TypeScript Challenge / codewars

## Build Tower

``` TypeScript
export const towerBuilder = (nFloors: number): string[] => {
    // build here
    let result: string[] = []

    for (let i = 1; i <= nFloors; i++) {
        let floor: string = ''
        let m: number = (2 * i) - 1
        for (let i = 0; i < m; i++) {
            floor += '*'
        }
        result.push(floor)
    }

    for (let n = 0; n < nFloors - 1; n++) {
        let spaces: string = ''
        for (let i = nFloors - 1 - n; i > 0; i--) {
            spaces += ' '
        }
        result[n] = spaces + result[n] + spaces
    }

    return result
}
```

## Meeting

``` TypeScript
export function meeting(s: string): string {
    // your code
    return s
        .toUpperCase()
        .split(';')
        .map(item => item.split(':').reverse())
        .sort((a, b) => {
            if (a > b) {
                return 1
            }
            if (a < b) {
                return -1
            }
            return 0
        })
        .map(item => `(${item.join(', ')})`)
        .join('')
}
```

[wednesdayChallenge.ts](/src/week_07/31-08-2022/wednesdayChallenge.ts)

[Regresar](/README.md)
