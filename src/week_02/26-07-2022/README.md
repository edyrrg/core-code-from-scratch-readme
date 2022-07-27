# Multiply / Code Wars

- Description
This code does not execute properly. Try to figure out why.

```JavaScript
function multiply(a, b){
  a * b;
}

//Solution
function multiply(a, b){
  return a * b;
}
```

# ASCII / Code Wars

- Description
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

```JavaScript
function uniTotal (string) {
// total up dem unicodes!
  let total = 0;
  for (let index = 0; index < string.length; index++) {
    let numberOfChar = string.charCodeAt(index)
    total = total + numberOfChar;
  }
  return total;
}
```
