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
    console.log(arr)
    console.log(curr)
    res.push([...curr])
    for(let i=0;i<arr.length;i++){
        if(i== 0 || arr[i] != arr[i-1]){
            curr.push(arr[i])
            findSubset(arr.slice(i+1),curr)
            curr.pop()
        }
    }
}
let res = []
nums.sort((a,b)=>{return a-b})
findSubset(nums,[])
console.log(res)