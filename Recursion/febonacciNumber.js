// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   let a = 0;
//   let b = 1;

//   for (let i = 2; i <= n; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return b;
// }

// console.log(fib(10));

function febnocci(n) {
  if (n <= 1) {
    return n;
  }

  return febnocci(n - 1) + febnocci(n - 2);
}
console.log(febnocci(10));

//////dianamic programingte

const memo = new Map();

function febnocciNum(n) {
  if (n <= 1) {
    return n;
  }

  if (memo.has(n)) {
    return memo.get(n);
  }

  const result = febnocciNum(n - 1) + febnocciNum(n - 2);
  memo.set(n, result);
  return result;
}

console.log(febnocciNum(5));
