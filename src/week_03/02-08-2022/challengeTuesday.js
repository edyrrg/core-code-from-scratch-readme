
function pigIt(str) {
    let marks = ['?', '¡', '!', '¿']
    str = str.split(' ')
    for (let i = 0; i < str.length; i++) {
        if (str[i] == /¿!¡/i) continue;
        str[i] = str[i].slice(1) + str[i][0] + 'ay';
    }
    return str.join(' ')
}

console.log(pigIt('Hello world !'))


function duplicateCount(text) {
    //...
    return text.toLowerCase().split('').filter((char, i, arr) => {
        return arr.indexOf(char) !== i && arr.lastIndexOf(char) === i;
    }).length
}

console.log(duplicateCount("aabbcde"))


decodeMorse = function (morseCode) {
    //your code here
    return morseCode.replace('   ', ' ').split(' ').map(x => MORSE_CODE[x]).join(' ')
    
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))