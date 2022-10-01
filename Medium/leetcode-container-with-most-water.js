var maxArea = function (height) {
  midpoint = Math.ceil((height.length - 1) / 2);
  let left = 0;
  let right = height.length - 1;
  let highest = 0;
  let temp;
  while (left != right) {
    let width = right - left;
    if (Math.max(height[left], height[right]) == height[right]) {
      temp = height[left] * width;
      left++;
    } else {
      temp = height[right] * width;
      right--;
    }
    if (temp > highest) {
      highest = temp;
    }
  }

  return highest;
};
