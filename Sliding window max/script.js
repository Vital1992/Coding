// Sliding Window Maximum (Maximum of all subarrays of size K)

// Given an array and an integer K, find the maximum for each and every contiguous subarray of size K.

// Examples : 

// Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3 
// Output: 3 3 4 5 5 5 6
// Explanation: Maximum of 1, 2, 3 is 3
//                        Maximum of 2, 3, 1 is 3
//                        Maximum of 3, 1, 4 is 4
//                        Maximum of 1, 4, 5 is 5
//                        Maximum of 4, 5, 2 is 5 
//                        Maximum of 5, 2, 3 is 5
//                        Maximum of 2, 3, 6 is 6

// Input: arr[] = {8, 5, 10, 7, 9, 4, 15, 12, 90, 13}, K = 4 
// Output: 10 10 10 15 15 90 90          
// Explanation: Maximum of first 4 elements is 10, similarly for next 4 
//                        elements (i.e from index 1 to 4) is 10, So the sequence 
//                        generated is 10 10 10 15 15 90 90

function maxSlidingWindow(nums, k) {
    const output = [];
    const q = []; // Index
    let l = 0;
    let r = 0;
  
    while (r < nums.length) {
      // Pop smaller values from q
      while (q.length > 0 && nums[q[q.length - 1]] < nums[r]) {
        q.pop();
      }
      q.push(r);
  
      // Remove left value from the window
      if (l > q[0]) {
        q.shift();
      }
  
      if (r + 1 >= k) {
        output.push(nums[q[0]]);
        l++;
      }
      r++;
    }
    return output;
}

let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]
let k = 3
console.log(maxSlidingWindow(arr, k))