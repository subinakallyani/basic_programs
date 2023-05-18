let arr = [5, 10, 14, 8, 5, 3, 2, 18, 5, 22, 25];
let ele = 5;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == ele) {
    count = count + 1;
  }
}
console.log(count);
