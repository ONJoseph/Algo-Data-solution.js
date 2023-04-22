def advanced_quicksort(array, low = 0, high = array.length - 1)
  if low < high
    pivot_index = partition(array, low, high)
    print array
    puts
    advanced_quicksort(array, low, pivot_index - 1)
    advanced_quicksort(array, pivot_index + 1, high)
  end
  array
end

def partition(array, low, high)
  pivot = array[high]
  i = low - 1
  (low...high).each do |j|
    if array[j] <= pivot
      i += 1
      array[i], array[j] = array[j], array[i]
    end
  end
  array[i + 1], array[high] = array[high], array[i + 1]
  i + 1
end

advanced_quicksort([1, 3, 9, 8, 2, 7, 5])
# => 1 3 2 5 9 7 8
#    1 2 3 5 9 7 8
#    1 2 3 5 7 8 9
