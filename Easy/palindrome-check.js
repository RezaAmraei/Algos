function isPalindrome(string) {
  // write a for loop
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    // loop till the middle of the word
    // check first letter to last and use i to check bth sides
    if (string[i] !== string[string.length - i - 1]) return false;
    // if the check is ever not equal then return false
  }
  return true;
}
