# Who likes it? / Code Wars

- Description:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item. Implement the function which takes an array containing the names of people that like an item.

```JavaScript
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
```

# Bit Counting / Code Wars

- Description:
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

```JavaScript
    var countBits = function(n) {
  // Program Me

    let numberBinary = ''
    let division = 0

    numberBinary = n.toString(2)

    let resultado = numberBinary.split('').reduce((anterior, actual) => {
        return parseInt(anterior) + parseInt(actual)
    })

    return parseInt(resultado)
};
```

# Your order, please / Code Wars

- Description:
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

```JavaScript
function order(words){
  // ...
  if (words == '') return '';

    words = words.split(' ')

    return words.sort((a,b) => {
        if(numberOfWord(a) > numberOfWord(b)){
            return 1;
        }
        if(numberOfWord(a) < numberOfWord(b)){
            return -1;
        }
        return 0;
    }).join(' ')
}

function numberOfWord(word){
    for (let index = 0; index < word.length; index++) {
        if(Number.isNaN(parseInt(word[index])) == true){
            continue;
        } else {
            return parseInt(word[index])
        }
    }
}
```

[challengesMonday.js](/src/week_03/02-08-2022/challengeTuesday.js)

[Regresar](/README.md)
