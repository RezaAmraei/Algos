function classPhotos(redShirtHeights, blueShirtHeights) {
  // sort both arrays
  //find the array with the greatest height and make that the backrow
  //check to see if each one in the backrow is taller than the front row
  //if it is evert not true return false
  let backRow;
  let frontRow;
  sorting(redShirtHeights);
  sorting(blueShirtHeights);
  if (
    blueShirtHeights[blueShirtHeights.length - 1] >
    redShirtHeights[redShirtHeights.length - 1]
  ) {
    backRow = blueShirtHeights;
    frontRow = redShirtHeights;
  } else {
    frontRow = blueShirtHeights;
    backRow = redShirtHeights;
  }
  for (let i = 0; i < frontRow.length; i++) {
    if (frontRow[i] >= backRow[i]) return false;
  }
  return true;
}
function sorting(arr) {
  return arr.sort((a, b) => a - b);
}
