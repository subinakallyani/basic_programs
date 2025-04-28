function numRec(num, i) {
  if (num > i) {
    return;
  }

  numRec(num + 1, i);
  console.log(num);
}
numRec(1, 10);
