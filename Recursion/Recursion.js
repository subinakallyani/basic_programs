// function abc() {
//   console.log("1");
//   cde();
// }
// function cde() {
//   abc();
// }

// cde();

// let count = 0;
function rec(count) {
  if (count === 3) {
    return;
  }
  console.log(count);

  rec(count + 1);
  console.log(count + 10);
}

rec(0);

0;
1;
2;
