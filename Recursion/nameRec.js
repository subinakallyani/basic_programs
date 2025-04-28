// function recName(name, i) {
//   if (i > 5) {
//     return;
//   }
//   console.log(name);
//   recName(name, i + 1);
// }

// recName("subina", 1);

function recName(i, n) {
  if (i > n) {
    return;
  }
  console.log("subina");
  recName(i + 1, n);
}

recName(1, 5);
