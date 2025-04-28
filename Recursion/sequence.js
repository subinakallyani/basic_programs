const arr = [1, 2, 3];
const result = [];

function sequence(index, curr) {
  if (index === arr.length) {
    result.push(curr);
    return;
  }
  //   if (index >= arr.length) return;

  sequence(index + 1, [...curr, arr[index]]);
  sequence(index + 1, curr);
}

sequence(0, []);
console.log(result);
