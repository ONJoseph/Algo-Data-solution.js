def insertion_sort(array)
  # write your code here
  x = array.last
  i = array.length - 2
  while i >= 0 && array[i] > x
    array[i+1] = array[i]
    puts array.join(' ')
    i -= 1
  end
  array[i+1] = x
  puts array.join(' ')
end


insertion_sort([1, 3, 2])
# => 1 3 3
#    1 2 3

puts '-' * 20

insertion_sort([1, 4, 6, 9, 3])
# => 1 4 6 9 9
#    1 4 6 6 9
#    1 4 4 6 9
#    1 3 4 6 9
