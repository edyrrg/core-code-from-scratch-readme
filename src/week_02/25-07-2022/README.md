# if...else (?

The __if__ statement executes a statement if a specified condition is *truthy*. If the condition is *falsy*, another statement in the optional else clause will be executed.

Example:

```JavaScript
function testNum(a) {
    let result;
    if (a > 0) {
        result = 'positive';
    } else {
        result = 'NOT positive';
    }
    return result;
}
```

[fuente](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

# for (?

The for statement creates a __loop__ that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be *executed* in the loop.

Example:

```JavaScript
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678"
```

[fuente](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

# while (?

The while statement creates __a loop that executes a specified statement as long as the test condition evaluates to true__. The *condition is evaluated before executing the statement*.

Example:

```JavaScript
let n = 0;

while (n < 3) {
    n++;
}

console.log(n);
// expected output: 3
```

[fuente](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

# funtions declaration (?

The function declaration (function statement) defines a function with the __specified parameters__.

Example:

```JavaScript
function calcRectArea(width, height) { // specified parameters
  return width * height; //body, statements
}

console.log(calcRectArea(5, 6));
// expected output: 30
```

[fuente](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
