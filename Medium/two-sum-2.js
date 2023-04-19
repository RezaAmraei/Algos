//FOR NON SORTED ARRAY
var twoSum = function (numbers, target) {
  //loop through array
  for (let i = numbers.length; i >= 0; i--) {
    //skip any elements larger than target
    if (numbers[i] > target && numbers[0] >= 0) continue;
    if (numbers[i + 1] && numbers[i] === numbers[i + 1]) continue;
    //loop again
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      //add i + j to see if it equals target
      if (numbers[i] + numbers[j] === target) return [j + 1, i + 1];
    }
  }
};

//WITH SORTED ARRAY
var twoSum2 = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] === target) return [left + 1, right + 1];
    if (numbers[left] + numbers[right] > target) right--;
    else left++;
  }
};

const numbers = [2, 7, 11, 15];
console.log(twoSum(numbers, 9));
