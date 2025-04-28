function letters(str, i) {
  if (i >= str.length) return "";
  if (str[i] !== str[i + 1]) {
    return str[i] + letters(str, i + 1);
  } else {
    return letters(str, i + 1);
  }
}

console.log(letters("aaabaaa", 0));
