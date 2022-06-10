module.exports = function move(starting, goal) {
  let middle = [1,2,3].filter(item => ![starting, goal].includes(item));
  let result = `${starting}->${middle}` + " ";
  result += `${starting}->${goal}` + " ";
  result += `${middle}->${goal}`+ " ";
  return result;
};
