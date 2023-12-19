// Subsets

// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

// Backtracking 

const nums = [1,2,2]

function findSubset(arr,curr){
    res.push([...curr])
    console.log(arr) // [ 1, 2, 2 ] // [2, 2] // [2] // []
    console.log(curr) // [] // [1] // [1, 2] // [1, 2, 2]
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            curr.push(arr[i]) // [1] // [2] // [2]
            findSubset(arr.slice(i + 1), curr) // [2, 2] [1] // [2] [1, 2] // [] [1, 2, 2]
            curr.pop()
        }
    }
}
let res = []
nums.sort((a,b)=>{return a - b})
findSubset(nums, [])
console.log(res)

//

    const result = [];
    nums.sort();
    
    const dfs = (arr, i) => {
        if (i === nums.length) {
            result.push(arr);
            return;
        }
        // take the current number
        dfs([...arr, nums[i]], i+1);
        // while not at end of array and duplicate after current number
        while (i+1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
        // leave the current number
        dfs([...arr], i+1);
    }
    
    dfs([], 0);
console.log(result)