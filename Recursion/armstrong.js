function armstrong(num, sum = 0, actualNum = null) {
  if (num <= 0) {
    if (sum === actualNum) {
      return `${actualNum} is armstrong number`;
    } else {
      return `${actualNum} is not armstrong number`;
    }
  }
  let mode = num % 10;
  let cube = mode * mode * mode;
  sum += cube;

  let newNum = Math.floor(num / 10);
  return armstrong(newNum, sum, actualNum);
}
console.log(armstrong(133, 0, 133));
