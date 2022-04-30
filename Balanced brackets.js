function balancedBrackets(string) {
  // your code here
  let map = {")":"(","}":"{","]":"["}
  let arr = []
  for(let i=0;i<string.length;i++){
    if(Object.keys(map).includes(string[0])){
      return false
    }
    if(Object.values(map).includes(string[i])){
      arr.push(string[i])
    }
    else if(Object.keys(map).includes(string[i])){
      if(arr[arr.length-1]===map[string[i]]){
        arr.pop()
      }
    }
  }
  return !arr.length

}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets

