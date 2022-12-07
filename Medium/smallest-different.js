function smallestDifference(arrayOne, arrayTwo) {
  //create a array to hold both numbers and distance between them
  let result = [arrayOne[0], arrayTwo[0], Math.abs(arrayOne[0] - arrayTwo[0])];

  //create a loop and and a loop nested in there
  for (let i = 0; i < arrayOne.length; i++) {
    //the first loop will go through array 1
    for (let j = 0; j < arrayTwo.length; j++) {
      //the nested loop will compare the index at array1 and get all the distances witht hat to each value in array 2
      // in each iteration me will check the distance and if the distance is smaller then my smallest me will change the values in the array me created
      let distance = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (distance < result[2]) {
        result = [arrayOne[i], arrayTwo[j], distance];
      }
    }
  }
  //return my result array without the last index
  result.pop();
  return result;
}
