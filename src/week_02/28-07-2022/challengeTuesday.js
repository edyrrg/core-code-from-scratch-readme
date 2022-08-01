
let hello = '!Hi! Hi!!!!'
let newWord = '';
let count = 0;

for (let i = hello.length - 1; i >= 0; i--) {
    if (hello.charAt(i) == '!') {
        count++;
    } else {
        break;
    }
}

newWord = hello.substring(0, hello.length - count)

//console.log(newWord)

function shortcut(string) {
    let word = string.split('')
    let i = 0;
    for (let index = 0; index < word.length; index++) {
        if (word.includes('a')) {
            i = word.indexOf('a')
            word.splice(i, 1)
        }
        if (word.includes('e')) {
            i = word.indexOf('e')
            word.splice(i, 1)
        }
        if (word.includes('i')) {
            i = word.indexOf('i')
            word.splice(i, 1)
        }
        if (word.includes('o')) {
            i = word.indexOf('o')
            word.splice(i, 1)
        }
        if (word.includes('u')) {
            i = word.indexOf('u')
            word.splice(i, 1)
        }
    }
    return word.join('')
}

console.log(shortcut('how are you today?'))

const rps = (p1, p2) => {
    if(p1 == 'scissors' && p2 == 'rock'){
        return 'Player 2 won!'
    }
    if(p1 == 'paper' && p2 == 'scissors'){
        return 'Player 2 won!'
    }
    if(p1 == 'rock' && p2 == 'paper') {
        return 'Player 2 won!'
    }
    if(p2 == 'scissors' && p1 == 'rock'){
        return 'Player 1 won!'
    }
    if(p2 == 'paper' && p1 == 'scissors'){
        return 'Player 1 won!'
    }
    if(p2 == 'rock' && p1 == 'paper') {
        return 'Player 1 won!'
    }
    if(p1 === p2){
        return 'Draw!'
    }
};

console.log(rps('rock', 'paper'))

function persistence(num) {
    //code me
    let array = num.toString().split('')
    let result = 1;
    let counter = 0;

    while(array.length > 1 ) {
        for (let index = 0; index < array.length; index++) {
            result *= parseInt(array[index])
        }
        array = result.toString().split('')
        result = 1
        counter++
    }

    return counter
}

console.log(persistence(4))
