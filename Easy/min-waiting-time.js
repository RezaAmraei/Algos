function minimumWaitingTime(queries) {
  // Write your code here.
  //  1 ,   2,    2,      3,       6
  // (0) + (1) + (2+1) +  (5) + (8)
  queries.sort((a, b) => a - b);
  console.log(queries);
  let sum = 0;
  let total = 0;
  for (let i = 1; i < queries.length; i++) {
    sum += queries[i - 1];
    total += sum;
  }
  console.log(total);
  return total;
}
