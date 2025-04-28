function subsequence(sequence) {
  const result = [];
  sequence.sort((a, b) => a - b);

  function backtrack(start, current) {
    // console.log(sequence);
    result.push([...current]);
    for (let i = start; i < sequence.length; i++) {
      if (i > start && sequence[i] === sequence[i - 1]) continue;
      current.push(sequence[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }
  backtrack(0, []);
  return result;
}

console.log(subsequence([1, 3, 2, 2]));
