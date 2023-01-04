function runLengthEncoding(string) {
  // Write your code here.

  let count = 1;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (string[i + 1] === current) {
      count++;
      if (count > 9) {
        result += `9${string[i]}`;
        count = 1;
      }
    } else {
      result += `${count}${string[i]}`;
      count = 1;
    }
  }
  return result;
}
