function validParentheses(parens) {
    // your code here ..
    let count = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] == '(') {
            count += 1
        } else {
            count -= 1
        }
        if (count < 0) return false;
    }
    return count == 0;
}

console.log(validParentheses('(())((()())())'))

function toCamelCase(str) {
    const regex = /_|-/g
    str = str.split(regex)
    for (let i = 1; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    }
    return str.join('')
}

console.log(toCamelCase('the_stealth_warrior'))

var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    let resultado = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            resultado.push(iterable[i]);
        }
    }
    return resultado;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))