// Combinational Sum

// Given an array of positive integers arr[] and an integer x, The task is to find all unique combinations in arr[] where 
// the sum is equal to x. 
// The same repeated number may be chosen from arr[] an unlimited number of times. Elements in a combination (a1, a2, …, ak) 
// must be printed in non-descending order. (ie, a1 <= a2 <= … <= ak). If there is no combination possible print “Empty”.

// Examples: 

// Input: arr[] = 2, 4, 6, 8, x = 8
// Output: 
// [2, 2, 2, 2]
// [2, 2, 4]
// [2, 6]
// [4, 4]
// [8]

var combinationSum = function (nums, target) {
    let combinations = [];
    nums.sort((a, b) => a - b);

    function backtrack(tempList, remaining, start) {
        for (let i = start; i < nums.length && nums[i] <= remaining; i++) {
            if (nums[i] === remaining) {
                combinations.push([...tempList, nums[i]]);
            } else {
                backtrack([...tempList, nums[i]], remaining - nums[i], i);
            }
        }
    }

    backtrack([], target, 0);
    return combinations;
};

let arr = [2, 4, 6, 8] 
let x = 8
console.log(combinationSum(arr, x))