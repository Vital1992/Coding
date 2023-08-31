# Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

# An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
'''

grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
'''

def solution(grid) -> int:
  res = 0
  m = len(grid)
  n = len(grid[0])

  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 1]

  def dfs(x, y):
    grid[x][y] = '0'

    for i in range(4):
      a = x + dx[i]
      b = y + dy[i]
      if 0<= a < m and 0<= b < n and grid[a][b] == '1':
        dfs(a,b)

  for i in range(m):
    for j in range(n):
      if grid[i][j] == '1':
        dfs(i, j) # two positions as input
        res += 1

  return res


grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
print(solution(grid1))
grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
print(solution(grid2))



'''
// Given an integer array nums, find any peak element, and return its index.


// * A peak element is an element that is strictly greater than its neighbors.
// * If the array contains multiple peaks, return the index to any of the peaks.
// * You may assume that nums[-1] = nums[n] = -∞.

// Example 1:
// Input: nums = [1,2,3,2]
// Output: 2

// Example 2:
// Input: nums = [1,2,1,2,5,6,2]
// Output: 1 or 5

// Example 3:
// Input: nums = [1,1,1]
// Output:-> invalid

-∞ [1, 2, 3] -∞
-∞ [3, 2, 1] -∞
'''
def find_peak(nums):
  for i in range(1 , len(nums)-1):
    if  nums[i-1] < nums[i] and nums[i] > nums[i+1]:
      return i
  if nums[0] < nums[1]:
    return 0
  if nums[-1] > nums[-2]:
    return len(nums) -1
  return -1


def binary_find_peak(nums):
  l = len(nums)
  start = 0
  mid = (start + l) // 2
  while mid < l and mid > start:
    n = nums[mid]
    if nums[mid -1] < n and n > nums[mid+1]:
      return mid
    else:
      if nums[mid] < nums[mid-1]:
        l = mid
        mid = (mid+start)//2
      else:
        start = mid
        mid = (mid +l)//2

  if nums[0] < nums[1]:
    return 0
  if nums[-1] > nums[-2]:
    return len(nums) -1
  return -1
    


