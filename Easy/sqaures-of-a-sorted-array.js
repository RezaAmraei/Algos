var sortedSquares = function (nums) {
  //loop through array
  for (let i = 0; i < nums.length; i++) {
    //on each iteration we will replace current element with squared element
    const currentVal = nums[i];
    nums[i] = currentVal * currentVal;
  }
  //after loop is completed we will sort
  return nums.sort((a, b) => a - b);
};

const nums = [-4, -1, 0, 3, 10];
sortedSquares(nums);
