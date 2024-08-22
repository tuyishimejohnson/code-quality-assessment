/* Write a JavaScript function to check if a given number is prime or not. */

const checkPrimeNumber = number => {
    if(number <= 1) return false
    for(let i = 2; i < number; i++) if(number % i === 0) return false
    return true

}

console.log(checkPrimeNumber(1))