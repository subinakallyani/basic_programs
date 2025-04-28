//parameterized

function sumRec(i, sum) {
  if (i < 1) {
    console.log(`sum ${sum}`);
    return;
  }

  sumRec(i - 1, sum + i);
}

sumRec(3, 0);

//functional REcursion

function recSum(n) {
  if (n === 0) {
    return 0;
  }
  return n + recSum(n - 1);
}

console.log(recSum(3));
