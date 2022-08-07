//get character from ASCII Value
function getChar(c) {
    // ...
    let charFromCode = String.fromCharCode(c);
    return charFromCode;
}

// Bynary Addition
let numberDecimal = 3
let numberBinary = ''
let div = 0

while (numberDecimal > 0) {

    if (numberDecimal % 2 == 0) {
        numberBinary += '0'
    } else {
        numberBinary += '1'
    }

    div = numberDecimal / 2

    if (div % 1 == 0.5) {
        div -= 0.5
    }
    numberDecimal = div

}

console.log(numberDecimal.toString(2))

console.log(numberBinary)

console.log(numberBinary.split('').reverse().join(''))

console.log(1 % 2)


//Student's Final Grade
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    }

    if (exam > 75 && projects >= 5) {
        return 90;
    }

    if (exam > 50 && projects >= 2) {
        return 75;
    }
    return 0;
}