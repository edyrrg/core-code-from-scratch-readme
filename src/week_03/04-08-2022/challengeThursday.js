function foldArray(array, runs) {
    if (array.length == 1) return array;

    let newArray = [];
    let cantidadRepeticiones = parseInt(array.length / 2)
    console.log(cantidadRepeticiones)
    for (let i = 0; i < cantidadRepeticiones; i++) { // [6,6,3]
        newArray.push(array[i] + array[(array.length - 1 - i)])
    }

    if (array.length % 2 !== 0) newArray.push(array[cantidadRepeticiones]);

    if (runs > 1) {
        runs--
        return foldArray(newArray, runs)
    }

    return newArray;
}

console.log(parseInt(6 / 2))
console.log(foldArray([1, 2, 3, 4, 5], 3))
console.log(foldArray([9, 6], 1))
console.log(foldArray([5]))
console.log(foldArray([5, 6, 4, 5]))

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

console.log(encryptThis('New World'))

console.log(typeof 2)

const a = [1, 2, 3, 4, 5]

a.length = 2
console.log(a)
console.log(true === 1)
var b = [1, 2]
var c = [3, 5]

console.log(b.concat(c))

const d = [3, 4, 5]

function filteDuplicates(data) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let result = []
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        if (!result.includes(data[i])) {
            result.push(data[i])
        }
    }
    return result;
}

function filterDuplicates(data) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let result = []
    data.filter((item) => {
        if (!result.includes(item))
            return result.push(item)
    })
    return result;
}


console.log(filterDuplicates([1]))

function decirHola() {
    return 'Hola mundo'
}

console.log(decirHola())

/**
 * 1. Instalar Quokka.js
 * 2. presionar en el archivo que deseamos ejecutar Ctrl + p
 * 3. en el recuadro escribimos '>Quokka'
 * 4. elegimos la opcion Start on current file
 */