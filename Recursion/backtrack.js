// function subsequence(sequence) {
//   const result = [];
//   function backtrack(start, current) {
//     result.push([...current]);
//     for (let i = start; i < sequence.length; i++) {
//       current.push(sequence[i]);
//       backtrack(i + 1, current);
//       current.pop();
//     }
//   }
//   backtrack(0, []);
//   return result;
// }

// console.log(subsequence([1, 2, 3]));

/////////

const result = [];
const sequence = [2, 1, 2, 3];

function backtrack(index, current) {
  if (index === sequence.length) {
    result.push([...current]);
    return;
  }
  current.push(sequence[index]);
  backtrack(index + 1, current);
  current.pop();
  backtrack(index + 1, current);
}
backtrack(0, []);
console.log(result);
