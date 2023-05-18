let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
let b = [
  [2, 4, 6],
  [4, 6, 8],
  [6, 8, 10],
  [6, 2, 8],
];
let sum = 0;
let div = 0;
let rows = a.length;
let mat = Array(4)
  .fill()
  .map(() => Array(3).fill());

let columns = a[0].length;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    // sum = a[i][j] + b[i][j];
    mat[i][j] = a[i][j] - b[i][j];
    // console.log(sum);
  }
}
console.log(mat);
