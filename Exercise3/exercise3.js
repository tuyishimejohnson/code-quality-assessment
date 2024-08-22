/* Implement a JavaScript function to find the sum of all elements in an array recursively. */

const sumOfNumbers = numbers => numbers.length === 0 ? 0 : numbers[0] + sumOfNumbers(numbers.slice(1))
console.log(sumOfNumbers([2,3,1,4])) 
