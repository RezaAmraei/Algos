var reverseWords = function (s) {
  //create variable for result
  let result = "";
  //create holder string
  let holder = "";
  //loop through given string
  for (i = 0; i < s.length; i++) {
    //once a whitespace is hit add the holder string to final string and set correct values to the pointers
    if (s[i] === " ") {
      holder += s[i];
      result += holder;
      holder = "";
      continue;
    }
    //push each element into a string but at the front
    holder = s[i] + holder;
  }
  return result + holder;
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
