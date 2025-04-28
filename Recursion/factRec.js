//parameterised

function factRec(num, fact) {
  if (num < 1) {
    console.log(fact);
    return;
  }
  factRec(num - 1, fact * num);
}

factRec(4, 1);

//functional

function recFact(n) {
  if (n === 0) {
    return 1;
  }
  return n * recFact(n - 1);
}

console.log(recFact(4));
