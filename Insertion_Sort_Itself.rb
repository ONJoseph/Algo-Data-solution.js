def sort_itself(array)
  # write your code here
  1.upto(array.size - 1) do |i|
    j = i
    while j > 0 && array[j - 1] > array[j]
      array[j - 1], array[j] = array[j], array[j - 1]
      j -= 1
    end
    puts array.join(' ') if i > 0
  end
end

sort_itself([1, 4, 3, 6, 9, 2])
# => 1 4 3 6 9 2
#    1 3 4 6 9 2
#    1 3 4 6 9 2
#    1 3 4 6 9 2
#    1 2 3 4 6 9
