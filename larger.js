let arr = [5, 7, 3, 2, 8, 1];
let larger = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > larger) {
    larger = arr[i];
  }
}
console.log(larger);
