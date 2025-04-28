function count(arr, i, num) {
  if (i >= arr.length) return num;
  if (arr[i] === 5) {
    num += 1;
  }

  return count(arr, i + 1, num);
}

console.log(count([5, 5, 5, 3, 1, 3, 4], 0, 0));
