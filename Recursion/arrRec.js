const arr = [1, 12, 3, 4, 15, 10];
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

function arrRec(arr, i) {
  if (i >= arr.length) {
    return;
  }
  arrRec(arr, i + 1);
  console.log(arr[i]);
}

arrRec(arr, 0);
