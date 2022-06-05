class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // creat a variable to hold our results
  let sums = [];
  // recursice function
  getTheSum(0, root, sums);
  //return the results
  return sums;
}
function getTheSum(sum, nextNode, sums) {
  //condition for recursive call
  if (!nextNode) {
    return;
  }

  //body of recursion
  let totalSum = sum + nextNode.value;
  if (nextNode.left == null && nextNode.right == null) {
    sums.push(totalSum);
  }
  //recursive call
  getTheSum(totalSum, nextNode.left, sums);
  getTheSum(totalSum, nextNode.right, sums);
}
