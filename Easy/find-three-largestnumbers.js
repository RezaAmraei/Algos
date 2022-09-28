function findThreeLargestNumbers(array) {
  // Write your code here.
  // 1) create an object thatll hold the three largest findThreeLargestNumbers
  let threeLargest = [];
  // 2) loop through the array and put the first 3 elements in the object
  for (let i = 0; i < array.length; i++) {
    if (i < 3) {
      threeLargest.push(array[i]);
      if (i == 2) threeLargest.sort((a, b) => a - b);
      continue;
    } else {
      if (array[i] > threeLargest[2]) {
        threeLargest[0] = array[i];
        threeLargest.sort((a, b) => a - b);
      } else if (array[i] > threeLargest[1]) {
        threeLargest[0] = array[i];
        threeLargest.sort((a, b) => a - b);
      } else if (array[i] > threeLargest[0]) {
        threeLargest[0] = array[i];
        threeLargest.sort((a, b) => a - b);
      }
    }
  }

  return threeLargest;
  // 3) after the first 3 compare each element to the object

  // 4) at the end of the loop put the three keys into its own array
}
