let a = 7;
let flag = true;
for (let i = 2; i <= a / 2; i++) {
  if (a % i == 0) {
    flag = false;
    break;
  }
}
if (flag == false) {
  console.log("not prime ");
} else {
  console.log("prime");
}
