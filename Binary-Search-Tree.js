class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(data) {
    const newNode = new Node(data)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  preOrder(node = this.root) {
    let result = ""
    if (node !== null) {
      result += node.data + " "
      result += this.preOrder(node.left)
      result += this.preOrder(node.right)
    }
    return result
  }
}

function binarySearchTree(array) {
  const tree = new BST()
  array.forEach(e => tree.insert(e))
  return tree.preOrder().trim()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree
