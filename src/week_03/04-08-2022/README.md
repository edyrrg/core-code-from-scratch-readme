# Fold An Array / Code Wars

``` JS
function foldArray(array, runs) {
    if (array.length == 1) return array;

    let newArray = [];
    let cantidadRepeticiones = parseInt(array.length / 2)
    console.log(cantidadRepeticiones)
    for (let i = 0; i < cantidadRepeticiones; i++) {
        newArray.push(array[i] + array[(array.length - 1 - i)])
    }

    if (array.length % 2 !== 0) newArray.push(array[cantidadRepeticiones]);

    if (runs > 1) {
        runs--
        return foldArray(newArray, runs)
    }

    return newArray;
}
```

# Encrypt This! / Code Wars

``` JS
var encryptThis = function (text) {
    // Implement me! :)
    text = text.split(' ')
    let result = [];
    result = text.map((x) => (x.length == 1) ?
        `${x[0].charCodeAt()}` : (x.length == 0) ? ` ` :
            (x.length == 2) ?
                `${x[0].charCodeAt() + x[1]}` :
                `${x[0].charCodeAt() + x[x.length - 1] + x.slice(2, x.length - 1) + x[1]}`)
    return result.join(' ')
}
```

[challengesThursday.js](/src/week_03/04-08-2022/challengeThursday.js)

[Regresar](/README.md)
