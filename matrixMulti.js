let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let b = [
  [2, 4, 6],
  [4, 6, 8],
  [6, 8, 10],
];
let rows = a.length;
let columns = a[0].length;
let mat = Array(3)
  .fill(0)
  .map(() => Array(3).fill(0));
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    for (let k = 0; k < rows; k++) {
      mat[i][j] += a[i][k] * b[k][j];
    }
  }
}
console.log(mat);
