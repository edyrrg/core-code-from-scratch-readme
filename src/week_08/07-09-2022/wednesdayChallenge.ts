export function parse(data: string): number[] {
    const resultArray: number[] = []
    let result: number = 0
    data
        .split('')
        .forEach(el => {
            switch (el) {
                case 'i':
                    result++
                    break;
                case 'd':
                    result--
                    break;
                case 's':
                    result **= 2
                    break;
                case 'o':
                    resultArray.push(result)
                    break;
            }
        })
    return resultArray
}

export function duplicateEncode(word: string) {
    // ...
    const wordArray: string[] = word.toLowerCase().split('')
    let result: string[] = []

    wordArray.forEach(el => {
        let count = wordArray.filter(item => item === el).length
        if (count === 1) {
            result.push('(')
        } else {
            result.push(')')
        }
    })

    return result.join('')
}

export function inArray(a1: string[], a2: string[]): string[] {
    return [... new Set(a1)].filter((subStr: string) => {
        let result = a2.find((str: string) => str.includes(subStr))
        return result != undefined;
    }).sort();
}

export const findOdd = (xs: number[]): number => {
    // happy coding!
    const noRepeatNumbers = new Set(xs)

    for (let curr of noRepeatNumbers) {
        if ((xs.filter(el => el === curr).length) % 2 !== 0) return curr;
    }

    return -1;
};