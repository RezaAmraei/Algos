function isMonotonic(array) {
  //create boolean var fto check if descend or ascend
  let ascend;
  if (array.length > 1) {
    ascend = array[0] < array[array.length - 1];
  } else {
    return true;
  }
  //loop through array
  console.log(ascend);
  for (let i = 0; i < array.length - 1; i++) {
    //check if current elements and element infront follow the correct pattern
    if (ascend) {
      if (array[i] > array[i + 1]) return false;
    } else {
      if (array[i] < array[i + 1]) return false;
    }
    //if patteren ever breaks return false
  }
  return true;
}
