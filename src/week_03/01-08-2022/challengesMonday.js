function likes(names) {
    // TODO
    if (names.length === 0)
        return 'no one likes this';

    if (names.length === 1)
        return `${names[0]} likes this`;

    if (names.length === 2)
        return `${names[0]} and ${names[1]} like this`;

    if (names.length === 3)
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;

    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

console.log(likes(['Jacob', 'Alex', 'Edy', 'Juan', 'Julia']))

var countBits = function (n) {
    // Program Me

    let numberBinary = ''
    let division = 0

    numberBinary = n.toString(2)

    let resultado = numberBinary.split('').reduce((anterior, actual) => {
        return parseInt(anterior) + parseInt(actual)
    })

    return parseInt(resultado)
};

console.log(countBits(0))

function order(words) {
    // ...
    let resultado = '';

    if (words == '') return '';

    words = words.split(' ')

    resultado = words.sort((a, b) => {
        if (numberOfWord(a) > numberOfWord(b)) {
            return 1;
        }
        if (numberOfWord(a) < numberOfWord(b)) {
            return -1;
        }
        return 0;
    })

    resultado = resultado.join(' ')

    return resultado
}

function numberOfWord(word) {
    for (let index = 0; index < word.length; index++) {
        if (Number.isNaN(parseInt(word[index])) == true) {
            continue;
        } else {
            return parseInt(word[index])
        }
    }
}

console.log(order(""))
console.log(order("is2 Thi1s T4est 3a"))

function newOrder(words) {
    words = words.split(' ')
    // ['is2', 'Thi1s']
    return words.sort((a, b) => {
        if (numberOfWord(a) > numberOfWord(b)) {
            return 1;
        }
        if (numberOfWord(a) < numberOfWord(b)) {
            return -1;
        }
        return 0;
    }).join(' ')
}

function numeroDeLaPalbra(word) {
    for (let index = 0; index < word.length; index++) {
        if (Number.isNaN(parseInt(word[index]))) { // 'i' parsarlo a numero -> NaN i s 2
            continue;
        } else {
            return parseInt(word[index])
        }
    }
}

console.log(newOrder("is2 Thi1s T4est 3a"))


console.log(Number.parseInt('i'))


// palarbra "walter2" = nombre
// palaba nombre[0], parseInt(nombre[0]) => NaN, parseInt('w') => NaN
// palabra nombre[6], parseInt(nombre[6]) => 2, parseInt('2') => 2