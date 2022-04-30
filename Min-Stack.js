class Stack {
  main = [];
  minNumber = [];

  push(number) {
    if (this.main.length === 0){
      this.minNumber.push(number);
    } else {
      if (number < this.minNumber[this.minNumber.length - 1]) {
        this.minNumber.push(number);
      }
    }
    this.main.push(number);
  }
  
  pop() {
    if (this.main.length !== 0){
      let wiped = this.main.pop();
      if (wiped <= this.minNumber[this.minNumber.length - 1]) {
        this.minNumber.pop();
      }
    }
  }
  
  min() {
    return this.minNumber[this.minNumber.length - 1];
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
