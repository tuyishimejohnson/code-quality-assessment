/* function maxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else {
    if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }
} */

  const maxNumber = (a, b, c) => Math.max(...[a, b, c])
  console.log(maxNumber(5, 338, 45))