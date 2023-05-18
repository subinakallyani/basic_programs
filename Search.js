let arr = [5, 10, 14, 8, 3, 2, 18, 22, 25];
let ele = 5;
let foundNum = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == ele) {
    foundNum = true;
    break;
  }
}
if (foundNum == false) {
  console.log(false);
} else {
  console.log(true);
}
