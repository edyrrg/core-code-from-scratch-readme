export function squareSum(numbers: number[]): number {
    if (numbers.length == 0) return 0;
    let result: number = numbers.reduce((previus: number, current: number) => previus + Math.pow(current, 2));
    return result;
}

console.log(squareSum([1, 2]))

export function warnTheSheep(queue: string[]): string {
    let find: number;
    find = queue.indexOf('wolf')
    return (find + 1 == queue.length) ? 'Pls go away and stop eating my sheep'
        : `Oi! Sheep number ${queue.length - (find + 1)}! You are about to be eaten by a wolf!`;
}