let arr = [5, 5, 5];
let crntSmall = Infinity;
let secondSmall = crntSmall;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < crntSmall) {
    secondSmall = crntSmall;
    crntSmall = arr[i];
  } else if (arr[i] < secondSmall) {
    secondSmall = arr[i];
  }
}
console.log(crntSmall);
console.log(secondSmall);
