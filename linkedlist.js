class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(number) {
    if (this.tail === null) {
      this.tail = new Node(number);
      this.head = this.tail;
    } else {
      this.tail.next_node = new Node(number);
      this.tail = this.tail.next_node;
    }
  }

  get(index) {
    let result = this.head;
    for (let count = 0; count < index; count++) {
      if (result != null) {
        result = result.next_node;
      }
    }
    return result.value;
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
