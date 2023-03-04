function leftmostNodesSum(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i = 2 * i + 1; // move to the left child
  }
  return sum;
}

module.exports = leftmostNodesSum;
