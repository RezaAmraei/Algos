var maxSubArray = function (nums) {
  let result = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (result < sum) result = sum;
    if (sum < 0) sum = 0;
  }
  return result;
};
