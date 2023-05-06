def merge_sort(array1, array2)
  # Base case: if either array is empty, return the other array
  return array2 if array1.empty?
  return array1 if array2.empty?

  merged_array = []
  index1 = 0
  index2 = 0

  # Compare the elements of both arrays and add the smaller element to the merged array
  while index1 < array1.length && index2 < array2.length
    if array1[index1] <= array2[index2]
      merged_array << array1[index1]
      index1 += 1
    else
      merged_array << array2[index2]
      index2 += 1
    end
  end

  # Add any remaining elements from array1
  while index1 < array1.length
    merged_array << array1[index1]
    index1 += 1
  end

  # Add any remaining elements from array2
  while index2 < array2.length
    merged_array << array2[index2]
    index2 += 1
  end

  return merged_array
end

# Test the merge_sort function
p merge_sort([1, 3, 9, 11], [2, 4, 6, 8])
# Output: [1, 2, 3, 4, 6, 8, 9, 11]
