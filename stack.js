// Optionally: start with your code from LinkedList challenge.

class Stack {
  constructor() {
    this.element = [];
  }

  push(number) {
    this.element.push(number);
  }
  
  pop() {
    let elem = this.element[this.element.length - 1];
    this.element.splice(this.element.length - 1, 1);
    return elem;
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 5

stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7

console.log(stack.pop())
// => 2

console.log(stack.pop())
// => 3

module.exports = Stack
