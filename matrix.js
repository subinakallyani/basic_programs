let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
let rows = a.length;
let columns = a[0].length;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    console.log(a[i][j]);
  }

  console.log("--------");
}
