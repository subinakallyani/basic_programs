function isPallindrome(str, i = 0) {
  if (i >= str.length) {
    return true;
  }
  if (str[i] !== str[str.length - i - 1]) {
    return false;
  }
  return isPallindrome(str, i + 1);
}

console.log(isPallindrome("subina"));
console.log(isPallindrome("madam"));
