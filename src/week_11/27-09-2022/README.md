# Answers about Node.js and more

* index
  * Node.js - [link](./answers/answer1.md)
  * JavaScript Modules - [link](./answers/answer2.md)
  * Client server - [link](./answers/answer3.md)

## Example Modules

``` JavaScript
//operations.js
function sum(num1, num2) {
    return num1 + num2;
}

function subs(num1, num2) {
    return num1 - num2;
}

module.export = {sum, subs};
```

``` JavaScript
//main.js
const operations = require('./operations')

let Core = 0.5;
let Code = 0.5;
const CoreCode = operations.sum(Core, Code)

console.log(CoreCode)
```

[resource](./ryuk/)

[Regresar](/README.md)
