// Maximum sum of subarrays having distinct elements of length K

// Given an array, arr[] and a value k, represent the length of the subarray to be considered. Find the maximum sum that 
// can be obtained from the subarray of length k such that each element of the subarray is unique. If there is no subarray 
// that meets the required condition then return 0.

// Examples:

// Input: arr[] = {1, 5, 4, 2, 9, 9, 9}, k = 3
// Output: 15
// Explanation: The possible subarrays of arr with length 3 are:

// {1, 5, 4} which meets the requirements and has a sum of 10.
// {5, 4, 2} which meets the requirements and has a sum of 11.
// {4, 2, 9} which meets the requirements and has a sum of 15.
// {2, 9, 9} which does not meet the requirements because element 9 is repeated.
// {9, 9, 9} which does not meet the requirements because element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the condition.

// Input: arr[] = {4, 4, 4}, k = 3
// Output: 0
// Explanation: The subarrays of arr with length 3 is {4, 4, 4} which does not meet the requirements because element 4 is repeated.
// We return 0 because no subarrays meet the conditions.


// function maxSum(arr, k){
//     let dist = []
//     let count = 0
//     let sums = []

//     for (let i = 0; i < arr.length; i++){
//         dist[i] = []
//         while (count < k && arr[i + count] && dist[i].indexOf(arr[i + count]) === -1){
//             dist[i].push(arr[i + count])
//             count++
//         }
//         count = 0
//         if (dist[i].length === k){
//             sums.push(dist[i].reduce((a, b) => a + b))
//         }
//     }
//     sums.sort((a, b) => b - a)
//     return sums.length > 0 ? sums[0] : 0
// }

// // const input = [1, 5, 4, 2, 9, 9, 9]
// const input = [-4, -2, 1, -3]
// const k = 2
// console.log(maxSum(input, k)) //-1


function maxSum(arr, k){
    let dist = []
    let count = 0
    let curSum = 0
    let maxSum = -Infinity

    for (let i = 0; i < arr.length; i++){
        dist[i] = []
        while (count < k && arr[i + count] && dist[i].indexOf(arr[i + count]) === -1){
            curSum = curSum + arr[i + count]
            dist[i].push(arr[i + count])
            count++
            if (count === k) {
                maxSum = Math.max(curSum, maxSum)
                curSum = 0
            }
        }
        count = 0
    }

    return maxSum
}

// const input = [1, 5, 4, 2, 9, 9, 9]
const input = [-4, -2, 1, -3]
const k = 2
console.log(maxSum(input, k)) //-1

//-----------------------------------------------------------------------------------------------------------------------

// Approach: The problem can be solved based on the following idea:

// The idea is based on two pointer Algorithm, where we will fix the size of the subarray k. Iterate over the array if the 
// size of the map becomes equal to k, Update the maximum sum if required.

// Follow the below steps to implement the idea:

// Take a map data structure that will store the elements of the subarray.
// Take two variables currentSum which will store the sum of the current subarray and maxSum which will store the max sum of 
// the subarray present in the given array.  
// Take a variable left that will point to the leftmost index of the element of the subarray considered.
// Iterate the array and perform the following step in each iteration:-
// Add the current element of the subarray in the map.
// Decrease the frequency of the left element of the subarray from the map. If the frequency of the leftmost element of the 
// subarray is zero then remove that element from the map.
// Subtract the leftMost element of the subarray from the currentSum.
// Add the value of the current element in the currentSum.
// If the size of the map is equal to k then (which means that all the elements present in the map are unique and hence all 
// the elements of the subarray considered are unique and hence this subarray will be considered) take the max value of 
// currentSum and maxSum. 
// Increment the left value by 1.

function findMaxSum(arr, k) {
    // Create an unordered map to store element counts
    const elementCounts = new Map();

    let currentSum = 0;
    let maxSum = 0;
    const n = arr.length;
    let left = 0;
    let i = 0;

    // Iterate for the first k elements
    while (i < k && i < n) {
        // Add element value to the current sum and update element count
        currentSum += arr[i];
        elementCounts.set(arr[i], (elementCounts.get(arr[i]) || 0) + 1);
        i++;
    }

    // If the number of distinct elements in the map is equal to k
    if (elementCounts.size === k) {
        maxSum = currentSum;
    }

    // Iterate over the left array
    for (let i = k; i < n; i++) {
        // Increment element count and decrement element count for left element
        elementCounts.set(arr[i], (elementCounts.get(arr[i]) || 0) + 1);
        elementCounts.set(arr[left], elementCounts.get(arr[left]) - 1);

        // If element count for left element becomes 0, remove it from the map
        if (elementCounts.get(arr[left]) === 0) {
            elementCounts.delete(arr[left]);
        }

        // Add element at right index to the current sum and subtract element at left index
        currentSum += arr[i];
        currentSum -= arr[left];

        // If the number of distinct elements in the map is equal to k, update the maximum sum
        if (elementCounts.size === k) {
            maxSum = Math.max(maxSum, currentSum);
        }

        // Move the left index to the right by 1
        left++;
    }

    // Return the maximum sum
    return maxSum;
}

// Driver code
const arr = [1, 5, 4, 2, 9, 9, 9];
const k2 = 3;

console.log(findMaxSum(arr, k2));

//-----------------------------------------------------------------------------------------------------------------------

// Sliding window technique

// Start by initializing variables and arrays:                                                                                                                                                                                                     a)Initialize integer variables n, i, j, ans, and sum to 0.
// b)Initialize an integer array freq of size 100001 to 0. 
 
// Iterate over the array using two pointers i and j:                                                                                                                                                                                       a)At each iteration, add the jth element to freq and sum.
// b)Check if the subarray between i and j is of length k.                             
 
// If the subarray is of length k, check if all elements in the subarray are distinct:                                                                                                                                         a)Iterate over the frequency array freq from 0 to 100000.
// b)If any element occurs more than once, set distinct to false.
 
// If all elements in the subarray are distinct, update the answer ans:                                                                                                                                                         a)Set ans to the maximum of ans and sum.
 
// Remove the ith element from freq and sum:                                                                                                                                                                                             a)Decrement freq[nums[i]].
// b)Subtract nums[i] from sum.
 
// Move the pointers i and j ahead:                                                                                                                                                                                                             a)Increment i and j by 1.
 
// If the subarray is not of length k, increase the length:                                                                                                                                                                               a)Increment j by 1.
 
// Continue iterating until the end of the array is reached.
 
// Return the answer ans.


function maxSum2(nums, k) {
    const n = nums.length;
    let i = 0, j = 0, ans = 0, sum = 0;
    const freq = new Array(100001).fill(0);
    while (j < n) {
      freq[nums[j]]++; // adding jth element
      sum += nums[j]; // adding jth element to sum
      if (j - i + 1 == k) { // if the subarray is of length k
        let distinct = true;
        for (let x = 0; x <= 100000; x++) { // check if all elements are distinct
          if (freq[x] > 1) {
            distinct = false;
            break;
          }
        }
        if (distinct) { // if all elements are distinct, update answer
          ans = Math.max(ans, sum);
        }
        freq[nums[i]]--; // remove the ith element
        sum -= nums[i]; // subtract the ith element from sum
        i++; j++; // move the pointers ahead
      } else {
        j++; // if the subarray is not of length k, increase the length
      }
    }
    return ans; // return the answer
  }
   
  const nums = [1, 5, 4, 2, 9, 9, 9];
  const k3 = 3;
  console.log(maxSum2(nums, k3)); // 15