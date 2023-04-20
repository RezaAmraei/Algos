var reverseString = function (s) {
  //state left and right
  let left = 0;
  let right = s.length - 1;
  //loop through given array with a while loop
  while (left < right) {
    //condition left > right
    //declare a temp variable to hold lefts data
    const temp = s[left];
    //swap left and right
    s[left] = s[right];
    s[right] = temp;
    //adjust left and right values
    left++;
    right--;
  }
  return s;
};

const s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
