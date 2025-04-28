// function abc(num) {
//   if (num === 5) {
//     return 5;
//   }
//   console.log(num);

//   const result = abc(num + 1);
//   return result + num;
// }

// // abc(1);

// console.log(abc(1), "hi");

// 1 5;
// 2 5;
// 3 5
// 4 5

function rev(num) {
  if (num === 5) {
    return;
  }

  rev(num + 1);

  console.log(num);
}

rev(1);
