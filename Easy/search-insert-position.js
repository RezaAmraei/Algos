/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const numsCopy = [...nums];

  while (nums.length !== 1) {
    let middleIndex = Math.floor(nums.length / 2);
    const middle = nums[middleIndex];
    if (middle === target) return numsCopy.indexOf(middle);

    if (middle > target) {
      nums = nums.slice(0, middleIndex);
    } else nums = nums.slice(middleIndex);
  }
  if (nums[0] >= target) return numsCopy.indexOf(nums[0]);
  else return numsCopy.indexOf(nums[0]) + 1;
};

let test = [1];
//console.log(searchInsert(test, 5));
console.log(searchInsert(test, 1));
