function binarySearch(array, target) {
  // Write your code here.
  // 1) store the length of the array and divide it by 2 and store that value

  // 2) check that value of that index and cut the length in half from the 0 to the length max depending on the comparision
  console.log(helper(array, target, 0, array.length - 1));
  return helper(array, target, 0, array.length - 1);
}

function helper(array, target, left, right) {
  let midpoint = Math.ceil((right + left) / 2);
  console.log(left, right, midpoint);

  if (midpoint == left || midpoint == right) {
    console.log(right, "hey");
    if (array[left] == target) return array.indexOf(array[left]);
    else if (array[right] == target) {
      console.log(right, "hello");
      return array.indexOf(array[right]);
    } else return -1;
  }
  if (array[midpoint] === target) {
    return array.indexOf(array[midpoint]);
  } else if (array[midpoint] > target) {
    return helper(array, target, left, midpoint - 1);
  } else if (array[midpoint] < target) {
    return helper(array, target, midpoint + 1, array.length - 1);
  }
}

//different solution

function binarySearch2(nums, target) {
  if (nums[0] === target) return 0;
  const copyArr = [...nums];
  while (nums.length > 1) {
    console.log(nums);
    const middle = Math.floor(nums.length / 2);
    const middleValue = nums[middle];

    if (middleValue === target) return copyArr.indexOf(middleValue);

    if (middleValue > target) nums = nums.slice(0, middle);
    else nums = nums.slice(middle);
  }
  return -1;
}
