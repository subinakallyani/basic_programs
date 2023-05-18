let s = "healidpq";
let count = 0;
for (let i = 0; i < s.length; i++) {
  if (
    s[i] !== "a" &&
    s[i] !== "e" &&
    s[i] !== "i" &&
    s[i] !== "o" &&
    s[i] !== "u"
  ) {
    count = count + 1;
  }
}
console.log(count);
//   if (s[i] == "a") {
//     count = count + 1;
//   } else if (s[i] == "e") {
//     count += 1;
//   } else if (s[i] == "i") {
//     count += 1;
//   } else if (s[i] == "o") {
//     count += 1;
//   } else if (s[i] == "u") {
//     count += 1;
//   }
// }
// console.log(count);
