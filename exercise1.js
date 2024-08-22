/* function calculateAverage(numbers) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
  }
  console.log(count)
  var average = sum / count;
  return average;
} */

  const calculateAverage = numbers => numbers.reduce((a, b) => a + b, 0) / numbers.length
  console.log(calculateAverage([1,2,3]))