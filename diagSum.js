let a = [
  [1, 2, 3, 10],
  [4, 5, 6, 11],
  [7, 8, 9, 12],
  [4, 3, 1, 2],
];
let sum = 0;
let rows = a.length;
// let columns = a[0].length;
let k = a.length - 1;
for (i = 0; i < rows; i++) {
  sum = sum + a[i][i] + a[i][k];
  k = k - 1;
}
if (rows % 2 == 0) {
  console.log(sum);
} else {
  console.log(sum - a[~~(rows / 2)][~~(rows / 2)]);
}
// i=0,k=2,sum=4
// i=1,k=1,sum=14
// i=2,k=0,sum=30
