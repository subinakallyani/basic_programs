function seperate(arr) {
  const numbers = arr.filter((item) => typeof item === "number");
  const string = arr.filter((item) => typeof item === "string");
  return [numbers, string];
}
const [numbers, string] = seperate([1, "a", "v", 2, 4]);
console.log(numbers);
console.log(string);
