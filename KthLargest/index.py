def findKthLargest(nums, k):
  nums.sort(reverse = True)
  return nums[k - 1]

if findKthLargest([3,2,1,5,6,4], 2) == 5:
  print('ex.1 pass')
else:
  print('ex.1 fail')

if findKthLargest([3,2,3,1,2,4,5,5,6], 4) == 4:
  print('ex.2 pass')
else:
  print('ex.2 fail')