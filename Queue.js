// Start with your code from LinkedList challenge.

class Queue {
  constructor() {
    this.element = [];
  }

  add(number) {
    this.element.push(number);
  }
  
  remove() {
    return this.element.length > 0 ? this.element.splice(0, 1)[0] : -1;
  }
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
