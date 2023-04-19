var moveZeroes = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  //use a while loop with a pointer at the front and at the end
  while (left <= right) {
    //go till pointers equal each other
    //if either or both pointers equal a zero pop that element and push a zero to the end
    if (nums[right] === 0) {
      nums.splice(right, 1);
      nums.push(0);
    }
    if (nums[left] === 0 && left !== right) {
      nums.splice(left, 1);
      nums.push(0);
      left--;
    }
    left++;
    right--;
  }
  console.log(nums);
};
let nums = [0, 0, 1];
moveZeroes(nums);
