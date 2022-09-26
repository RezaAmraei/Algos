function productSum(array, depth = 1) {
  // 1) added extra param for the depth mulitiplyer

  // 2)loop through array and check for special array

  // 3) if special array use recursion
  // increment depth by one

  // 4) return all values to calculate product sum
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], depth + 1);
    } else {
      sum += array[i];
    }
    console.log(sum, depth);
  }
  console.log(`checking ${depth}`);
  return sum * depth;
}
