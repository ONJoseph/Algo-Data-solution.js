class Node
  attr_reader :data
  attr_accessor :left, :right
  def initialize(data)
    @data = data
  end
end
def array_to_tree(array, index = 0)
  return nil if index >= array.length || (array[index]).zero?
  node = Node.new(array[index])
  node.left = array_to_tree(array, 2 * index + 1)
  node.right = array_to_tree(array, 2 * index + 2)
  node
end
def binary_search_tree(node, array = [])
  binary_search_tree(node.left, array) if node.left
  array.push(node.data)
  binary_search_tree(node.right, array) if node.right
  i = 0
  while i < array.length - 1
    return false if array[i] > array[i + 1]
    i += 1
  end
  true
end
def search_tree?(array)
  root = array_to_tree(array)
  binary_search_tree(root)
end
# puts search_tree?([10, 4, 12])
# # => true
# puts search_tree?([10, 5, 7])
# # => false
