// Given an array of positive integers nums and a positive integer target, return the 
// minimal length of a subarray whose sum is greater than or equal to target. 
// If there is no such subarray, return 0 instead.


// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution 
// of which the time complexity is O(n log(n)).

// const target = 80
// const nums = [10,5,13,4,8,4,5,11,14,9,16,10,20,8]

const target = 15
const nums = [5,1,3,5,10,7,4,9,2,8]

function slide(nums, target) {
    let l = 0
    let r = 1
    let min = Infinity
    let sum = nums[0]

    while (l <= r && r <= nums.length) {
        if (sum >= target) {
            min = Math.min(min, r - l)
            l++
            sum = nums[l]
            r = l + 1
        }
        if (sum < target) {
            sum = sum + nums[r]
            r++
        }
    }
    return min === Infinity ? 0 : min
}
console.log(slide(nums, target))

// Btter performance
function slide_n0() {
    // initialize the start and end of the window from starting point
	let start = 0;
    let end = 0;
    // consider the minValue to be infinity,
    // just to define the variable 
    let minValue = Infinity;
    // sum of subarray initialized to initial array value
    let subarraySum = nums[0];

    // slide the window upto array length
    // start of the window always be less than or may be equal to end
    while(start <= end && end < nums.length){
    // if sum satisfies the condition
        if(subarraySum >= target){
        // extract the minimum subarray length
        // end-start+1 => end >= start (always greater or equal)
        // when end === start, then end - start === 0
        // but window stays atleast on one element (+1) of array 
            minValue = Math.min(minValue, end-start+1);
        // move the start of window by one element
        // and remove last start element from sub array sum
            subarraySum -= nums[start];
            start++;
        } else {
        // if sum didn't satisfies the condition, drag the window end
        // till the sum >= target
            end++;
            subarraySum += nums[end];
        }
    }
    // return 0, as no subarray satisfies the given condition
    return minValue === Infinity ? 0 : minValue;
}