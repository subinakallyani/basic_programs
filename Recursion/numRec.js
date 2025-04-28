function numRec(num, i) {
  if (num > i) {
    return;
  }
  console.log(num);
  numRec(num + 1, i);
}
numRec(1, 10);
