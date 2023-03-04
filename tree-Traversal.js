class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

function arrayToTree(array, i) {
  if (i >= array.length || array[i] === 0) {
    return null
  }

  const node = new Node(array[i])
  node.left = arrayToTree(array, 2*i+1)
  node.right = arrayToTree(array, 2*i+2)

  return node
}

function postOrder(node) {
  if (node === null) {
    return ''
  }

  let result = ''
  result += postOrder(node.left)
  result += postOrder(node.right)
  result += `${node.data} `
  return result
}

module.exports = { arrayToTree, postOrder };
