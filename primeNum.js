for (let a = 1; a <= 100; a++) {
  let flag = true;
  for (let i = 2; i <= a / 2; i++) {
    if (a % i == 0) {
      flag = false;

      break;
    }
  }
  if (flag == true) {
    console.log(a);
  }
}
