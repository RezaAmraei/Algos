function getNthFib(n) {
  if (n == 1) return 0;
  if (n == 2 || n == 3) return 1;
  let fib = [0, 1];
  let counter = 0;

  while (counter < n) {
    let newSequence = fib[counter] + fib[counter + 1];
    fib.push(newSequence);
    counter++;
  }
  console.log(fib);
  return fib[n - 1];
}
