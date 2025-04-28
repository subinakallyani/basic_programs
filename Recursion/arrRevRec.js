const arr = [1, 2, 3, 4];
// const reversedArr = [];

// function reversedArray(start, end) {
//   if (start === end) {
//     return;
//   }

//   [arr[start], arr[end]] = [arr[end], arr[start]];
//   reversedArray(start + 1, end - 1);
// }

// reversedArray(0, arr.length - 1);
// console.log(arr);
// const n = arr.length;
// function reversedArray(i) {
//   if (i >= n / 2) {
//     return;
//   }

//   [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
//   reversedArray(i + 1);
// }

// reversedArray(0);
// console.log(arr);

function newArr(i) {
  if (i >= arr.length) {
    return [];
  }
  const reArr = newArr(i + 1);
  reArr.push(arr[i]);
  return reArr;
}

console.log(newArr(0));
