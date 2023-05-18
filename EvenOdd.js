let arr = [5, 10, 14, 8, 3, 2, 18, 22, 25];
let even = [];
let odd = [];
for (let i = 0; i < arr.length; i++) {
  // let result = arr[i] % 2 == 0 ? "even" : "odd";
  // if (arr[i] == 8) {
  //   continue;
  // } else if (arr[i] == 3) {
  //   continue;
  // } else if (arr[i] == 22) {
  //   continue;
  // }

  if (arr[i] == 8 || arr[i] == 3 || arr[i] == 22) {
    continue;
  }
  if (arr[i] % 2 == 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
  // if (arr[i] == 2) {
  //   break;
  // }
}

console.log("even", even);
console.log("odd", odd);
