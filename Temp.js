let a = 153;
let sum = 0;
let b = a;
while (a > 0) {
  let mode = a % 10;
  a = ~~(a / 10);
  let cube = mode * mode * mode;
  sum = sum + cube;
}
if (b == sum) {
  console.log(true);
} else {
  console.log(false);
}
