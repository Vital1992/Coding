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


const nums = [1,2,1,2,5,6,2]

let finals = []

nums.forEach((num, idx)=>{
  if (num > nums[idx-1] && num > nums[idx+1]){
    finals.push(idx)
  }
})

const toReturn = finals.length > 1 ? finals.map((cur, i)=>{
if (i !== finals.length - 1){
  return `${cur} or`
}
return `${cur}`
}) 
: finals.length === 0 ? 'invalid' : finals

 console.log(toReturn.join(' '))