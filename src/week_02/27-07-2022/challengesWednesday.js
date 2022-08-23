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

function calc(array, n1, n2) {
    if (!(n1 >= 0)) return undefined;
    if (!(n1 <= n2)) return undefined;
    if (!(n2 < array.length)) return undefined;

    return array.filter((item, index) => {
        if(index >= n1 && index <= n2){
            return item;
        }
    })
    .reduce((previus, current) => previus +  current)
}

console.log(calc([0, 1, 2, 3, 4, 5, 3], 0, 5))