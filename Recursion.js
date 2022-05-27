module.exports = function sum(number) {
  // write your code 
  //recursive
  if (number <= 0) return number;
  return number + sum(number-1);
}
/*
console.log(sum(4))
console.log(sum(10))
*/

//Iterative
/* let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum +=i;
  }
  return sum;
  */
