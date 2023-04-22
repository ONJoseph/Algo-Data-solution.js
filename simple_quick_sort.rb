def simple_quicksort(array)
  return array if array.length <= 1 # base case

  pivot = array[0] # choose the first element as pivot
  left = []
  right = []

  (1..array.length-1).each do |i| # partition the array
    if array[i] < pivot
      left << array[i]
    else
      right << array[i]
    end
  end

  # sort the partitions recursively and combine them
  sorted_left = simple_quicksort(left)
  sorted_right = simple_quicksort(right)

  sorted_left << pivot << sorted_right
  sorted_left.flatten!

  # print the sorted array
  puts sorted_left.join(' ')

  sorted_left # return the sorted array
end
