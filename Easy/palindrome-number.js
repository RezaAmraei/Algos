var isPalindrome = function (x) {
  //TO START  we will turn number into a string
  const newString = x.toString();
  //we well then loop through the string to the half way point
  for (let i = 0; i < Math.floor(newString.length / 2); i++) {
    //in each iteration we will check the front to the back
    const length = newString.length - 1;
    if (newString[i] !== newString[length - i]) return false;
  }
  //if it reaches the middlewith no differences it is a palindrome
  return true;
};
