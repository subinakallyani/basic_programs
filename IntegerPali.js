let a = "malpgklam";
let j = a.length - 1;
let flag = true;
for (let i = 0; i < a.length / 2; i++) {
  if (a[i] !== a[j]) {
    flag = false;
    break;
  }
  j = j - 1;
}
if (flag == true) {
  console.log(true);
} else {
  console.log(false);
}
