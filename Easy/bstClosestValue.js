function findClosestValueInBst(tree, target) {
  // Write your code here.
  let distanceFromTarget = {};
  let runner = tree;
  //Math.abs(runner.value - target)
  //distanceFromTarget[runner.value] = Math.abs(runner.value - target)
  let i = 0;
  let lowestVal;
  // start at the head of the tree and loop through tree and check tree value to target
  while (runner != null) {
    //on each check go left or right depending on greater than or less than
    if (runner.value < target) {
      distanceFromTarget[runner.value] = Math.abs(runner.value - target);
      lowestVal = Math.abs(runner.value - target);
      runner = runner.right;
      // store value in an object as a key and distance from target as the value, absolute value
    } else if (runner.value > target) {
      distanceFromTarget[runner.value] = Math.abs(runner.value - target);
      lowestVal = Math.abs(runner.value - target);
      runner = runner.left;
    } else if (runner.value == target) {
      return runner.value;
    }
    i++;
  }
  //at the end of the loop grap the lowest distance and return that key
  let answer;

  for (num in distanceFromTarget) {
    if (distanceFromTarget[num] <= lowestVal) {
      lowestVal = distanceFromTarget[num];
      answer = num;
    }
  }

  return answer;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
