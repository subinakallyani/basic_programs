function perfectNum(num, i, sum) {
  //   if (i > num / 2) return sum;
  if (i > num / 2) return 0;
  let current = 0;

  if (num % i === 0) {
    current = i;
  }
  return current + perfectNum(num, i + 1, sum);
}

console.log(perfectNum(6, 1, 0));
