//WITH HOLDER ARRAY
var rotate = function (nums, k) {
  const max = nums.length - 1;
  const arr = new Array(nums.length).fill(null);
  //loop through array
  for (let i = 0; i < nums.length; i++) {
    // grab the current value
    const currentVal = nums[i];
    //check to see if i + k goes over length first
    //then set array[i + k] equal to current value
    if (i + k > max) {
      const index = i + k - max - 1;
      arr[index] = currentVal;
    } else {
      const index = i + k;
      arr[index] = currentVal;
    }
  }
  return arr;
};

//IN PLACE SOLUTION
var rotate2 = function (nums, k) {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }

  return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotate(nums, 3));
console.log(rotate2(nums, 3));
