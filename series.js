let count = 0;
for (let i = 0; i <= 5; i++) {
  let count1 = "";
  for (let j = 0; j <= i; j++) {
    count = count + 1;
    count1 = count1 + count;
  }
  console.log(count1);
}
