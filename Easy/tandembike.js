function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  //define variables used to solve the problem
  let totalSpeed = 0;
  //sort both inut arrays
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);

  //loop through sorted array to match red shirts with blue shirts depending on if fatestest is true or false
  for (let i = 0; i < blueShirtSpeeds.length; i++) {
    if (fastest) {
      totalSpeed += Math.max(
        blueShirtSpeeds[i],
        redShirtSpeeds[redShirtSpeeds.length - i - 1]
      );
    } else {
      totalSpeed += Math.max(blueShirtSpeeds[i], redShirtSpeeds[i]);
    }
  }
  //in loop add the speed to the total speed var
  //return total speed var
  console.log(totalSpeed);
  return totalSpeed;
}
