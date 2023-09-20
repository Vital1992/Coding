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
// const nums = [5,3,9,6,2,1,6]

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

 function binaryFindPeak(nums) {
  let last = nums.length;
  let start = 0;
  let mid = Math.floor(last / 2 - 1);

  while (mid < last && mid > start) {
    let middle = nums[mid];
    console.log(middle)
    // If the element at the current mid index (n) is greater than both its neighbors. 
    // If it is, this element is a peak, and its index (mid) is returned as the result.
    if (nums[mid - 1] < middle && middle > nums[mid + 1]) {
      return mid;
    } else {
      if (nums[mid] < nums[mid - 1]) {
        last = mid;
        mid = Math.floor((mid + start) / 2);
      } else {
        start = mid;
        mid = Math.floor((mid + last) / 2);
      }
    }
  }

  if (nums[0] < nums[1]) {
    return 0;
  }

  if (nums[last - 1] > nums[last - 2]) {
    return last - 1;
  }

  return -1;
}

// Example usage:
const peakIndex = binaryFindPeak(nums);
console.log("Peak Index:", peakIndex);
