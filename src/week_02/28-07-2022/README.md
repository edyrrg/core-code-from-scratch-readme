# Remove All Exclamation Marks From The End Of Sentence / Code Wars

- Description:
Remove all exclamation marks from the end of sentence.

``` JavaScript
function remove (string) {
  let newWord = '';
  let count = 0;
  for (let i = string.length - 1; i >= 0; i--) {
      if (string.charAt(i) == '!') {
        count++;
      } else {
        break;
      }
  }
  newWord = string.substring(0, string.length-count)
  return newWord;
}
```

# Vowel remover / Code Wars

- Description:
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

``` JavaScript
function shortcut (string) {
  let word = string.split('')
  let i = 0;
  for (let index = 0; index < word.length; index++) {
    if(word.includes('a')){
      i = word.indexOf('a')
      word.splice(i,1)
    }
    if(word.includes('e')){
      i = word.indexOf('e')
      word.splice(i,1)
    }
    if(word.includes('i')){
      i = word.indexOf('i')
      word.splice(i,1)
    }
    if(word.includes('o')){
      i = word.indexOf('o')
      word.splice(i,1)
    }
    if(word.includes('u')){
      i = word.indexOf('u')
      word.splice(i,1)
    }
  }
  return word.join('')
}
```

# Rock Paper Scissors! / Code Wars

- Description:
Let's play! You have to return which player won! In case of a draw return Draw!.

```Js
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
}
```

# Persistent Bugger.

```JavaScript
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
```

[challengeTuesday.js](/src/week_02/28-07-2022/challengeTuesday.js)
[Regresar](/README.md)
