let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
for (let i = 1; i < arr.length; i = i + 2) {
  sum = sum + arr[i];
}
console.log(sum);
