let a = 153;
let b = a;
let sum = 0;
while (a > 0) {
  let mode = a % 10;
  a = ~~(a / 10);
  let cube = mode * mode * mode;
  sum = sum + cube;
}

if (sum == b) {
  console.log(true);
} else {
  console.log(false);
}
