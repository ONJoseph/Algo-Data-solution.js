module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
  let mid = Math.floor((min_interval + max_interval) / 2);

  const answer = mid * mid;
  if(answer == number) {
    return mid;
  }
  if(answer > number) {
    return sqrt_recursive(number, min_interval, mid + 1)
  }
  if(answer < number) {
    return sqrt_recursive(number, mid - 1, max_interval);
  }
}
//console.log(sqrt(25))
//console.log(sqrt(7056))
