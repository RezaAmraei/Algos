function nodeDepths(root, counter = 0) {
  // Write your code here.

  // declare a countr variable that holds sum of all depths

  if (root == null) {
    return 0;
  }

  console.log("What im returning - " + counter);
  //call a recursive function
  return (
    counter +
    nodeDepths(root.left, counter + 1) +
    nodeDepths(root.right, counter + 1)
  );
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
