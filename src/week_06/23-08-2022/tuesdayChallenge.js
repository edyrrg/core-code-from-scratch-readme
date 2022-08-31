"use strict";
exports.__esModule = true;
exports.squareSum = void 0;
function squareSum(numbers) {
    if (numbers.length == 0)
        return 0;
    var result = numbers.reduce(function (previus, current) { return previus + Math.pow(current, 2); });
    return result;
}
exports.squareSum = squareSum;
console.log(squareSum([1, 2]));
