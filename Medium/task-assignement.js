function taskAssignment(k, tasks) {
  // Write your code here.
  let results = [];
  let holder = [];
  let objOfValues = {};
  for (let i = 0; i < tasks.length; i++) {
    objOfValues[i] = tasks[i];
  }
  for (let value in objOfValues) {
    console.log(value, objOfValues[value]);
    holder.push([value, objOfValues[value]]);
  }
  holder.sort((a, b) => a[1] - b[1]);

  while (holder.length) {
    results.push([holder[0][0], holder[holder.length - 1][0]]);
    holder.shift();
    holder.pop();
  }

  return results;
}
