function nonConstructibleChange(coins) {
  // Write your code here.
  // sort the array
  coins.sort(function (a, b) {
    return a - b;
  });
  console.log(coins);
  //init a variable to holder amount of changess
  let currChange = 0;
  //loop through each coin and check if coin is 1 more than amount of change currently counted
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > currChange + 1) {
      return currChange + 1;
    }
    currChange += coins[i];
  }
  return currChange + 1;
}
