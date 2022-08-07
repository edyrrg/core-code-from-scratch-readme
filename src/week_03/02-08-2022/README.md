# Simple Pig Latin / CodeWars

```JS
function pigIt(str){
    //Code here
    const marks = ['?','¿','¡','!']
    str = str.split(' ')
    for(let i = 0; i < str.length; i++){
        if(marks.includes(str[i])) continue;
        str[i] = str[i].slice(1) + str[i][0] + 'ay';
    }
    return str.join(' ')
}
```

# Counting Duplicates / CodeWars

```JS
function duplicateCount(text){
  //...
    return text.toLowerCase().split('').filter((char, i, arr) => {
        return arr.indexOf(char) !== i && arr.lastIndexOf(char) === i;
    }).length
}
```

# Decode the Morse code / CodeWars

```JS
decodeMorse = function(morseCode){
  //your code here
    return morseCode
        .split(' ')
        .map(x => MORSE_CODE[x] || ' ')
        .join('')
        .replace(/  /g, ' ')
        .trim()
}
```

[challengeTuesday.js](/src/week_03/02-08-2022/challengeTuesday.js)

[Regresar](/README.md)
