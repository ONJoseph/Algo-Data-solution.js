// Start with your code from last challenge.
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

  get_node(index) {
    let result = this.head;
    for (let count = 0; count < index; count++) {
      if (result != null) {
        result = result.next_node;
      }
    }
    return result;
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

  addAt(index, number) {
    if (index === 0) {
      this.head = new Node(number, this.head);
    } else {
      let previous = this.get_node(index-1);
      previous.next_node = new Node(number, previous.next_node)
    }
  }

  get(index) {
    console.log('get-('+index+')', this.get_node(index))
    return (this.get_node(index)).value
  }

  remove(index) {
    if (index == 0) {
      this.head = this.head.next_node;
    } else {
      let previous = this.get_node(index-1);
      previous.next_node = previous.next_node.next_node
    }

  }
}

const list = new LinkedList()

list.add(3)
list.add(5)
list.addAt(1, 11)
list.addAt(0, 13)

console.log(list.get(2))
// => 11

console.log(list.get(3))
// => 5

module.exports = LinkedList
