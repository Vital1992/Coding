// Letter case premutations

// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
// Return a list of all possible strings we could create. Return the output in any order.

// Example 1:
// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]

// Example 2:
// Input: s = "3z4"
// Output: ["3z4","3Z4"]

// Constraints:
// 1 <= s.length <= 12
// s consists of lowercase English letters, uppercase English letters, and digits.

var letterCasePermutation = function(S) {
    let n = S.length;
    let res = []
    let char = /[a-zA-Z]/
    let arr = []
    
    function backtrack(i){
        if(i == n){
            res.push(arr.join(''))
            return
        }
        
        if(char.test(S[i])){
            arr[i] = S[i].toLowerCase()
            backtrack(i+1)
            arr[i] = S[i].toUpperCase()
            backtrack(i+1)
        } else {
            arr[i] = S[i]
            backtrack(i+1)
        }
    }
    
    backtrack(0)
    return res
};