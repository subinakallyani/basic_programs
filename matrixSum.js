let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let sum = 0;
let rows = a.length;
let columns = a[0].length;
for (let i = 0; i < Math.min(rows, columns); i++) {
  //   for (let j = 0; j < coloumns; j++) {
  //     if (i == j) {
  //       sum = sum + a[i][j];
  //     }
  //   }
//   console.log(a[i][i]);
  sum = sum + a[i][i];
}
console.log(sum);
