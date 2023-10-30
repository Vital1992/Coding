// Given a string str, find the length of the longest substring without repeating characters. 

// Example:

// Example 1:
// Input: “ABCDEFGABEF”
// Output: 7
// Explanation: The longest substring without repeating characters are “ABCDEFG”, “BCDEFGA”, and “CDEFGAB” with lengths of 7

// Example 2:
// Input: “GEEKSFORGEEKS”
// Output: 7
// Explanation: The longest substrings without repeating characters are “EKSFORG” and “KSFORGE”, with lengths of 7

function findlongest(input) {
    let lengths = []
    function count(){
        let sub = new Map()

        for (let i = 0; i < input.length; i++) {
            if (sub.has(input[i])){
                lengths.push(i)
                input.shift()
                count(input)
            } else {
                lengths.push(i+1)
            }
            sub.set(input[i])
        }
    }
    count(input)
    return Math.max(...lengths);
}


let input = "qwertyuioplkjh"
console.log(findlongest(input.split('')))

//-----------------------------------------------------------------------------------------

// Length of the longest substring without repeating characters using Sliding Window in O(n3) 
// time:
// Consider all substrings one by one and check for each substring whether it contains all 
// unique characters or not. There will be n*(n+1)/2 substrings. Whether a substring contains 
// all unique characters or not can be checked in linear time by scanning it from left to 
// right and keeping a map of visited characters. 

// This function returns true if all characters in
// str[i..j] are distinct, otherwise returns false
function areDistinct(str, i, j)
{
     
    // Note : Default values in visited are false
    var visited = new Array(256);
 
    for(var k = i; k <= j; k++)
    {
        if (visited[str.charAt(k) ] == true)
            return false;
             
        visited[str.charAt(k)] = true;
    }
    return true;
}
 
// Returns length of the longest substring
// with all distinct characters.
function longestUniqueSubsttr(str)
{
    var n = str.length;
     
    // Result
    var res = 0;
     
    for(var i = 0; i < n; i++)
        for(var j = i; j < n; j++)
            if (areDistinct(str, i, j))
                res = Math.max(res, j - i + 1);
                 
    return res;
}
 
// Driver code
    var str = "qwertyuioplkjh";
    var len = longestUniqueSubsttr(str);
     
    console.log(len);
 
//-----------------------------------------------------------------------------------------

// Length of the longest substring without repeating characters using Sliding Window in O(n2) 
// time:
// For each index i, find the the length of longest substring without repeating characters 
// starting at index i. This can be done by starting at index i, and iterating until the 
// end of the string, if a repeating character is found before the end of string we will 
// break else update the answer if the current substring is larger.

// Time Complexity: O(n^2), (The outer loop runs in O(n) time, and the inner loop runs 
// in O(n) in the worst case (considering all unique characters), resulting in a total time 
// complexity of O(n^2).)
// Auxiliary Space: O(1)

function longestUniqueSubsttr2(str)
{
    var n = str.length;
     
    // Result
    var res = 0;
     
    for(var i = 0; i < n; i++)
    {
         
        // Note : Default values in visited are false
        var visited = new Array(256);
         
        for(var j = i; j < n; j++)
        {
            // If current character is visited
            // Break the loop
            if (visited[str.charCodeAt(j)] == true){
                break;
            }
 
            // Else update the result if
            // this window is larger, and mark
            // current character as visited.
            else
            {
                res = Math.max(res, j - i + 1);
                visited[str.charCodeAt(j)] = true;
            }
        }
    }
    return res;
}
 
// Driver code
    var str2 = "geeksforgeeks";
 
    var len2 = longestUniqueSubsttr2(str2);
    console.log(len2);

//------------------------------------------------------------------------------------------

// Length of the longest substring without repeating characters using Binary Search on Answer:

// The idea is to check if a substring of a certain size “mid” is valid (A size mid is valid 
// if there exists at least one substring of size mid which contains all unique characters ), 
// then all the size less than “mid” will also be valid. Similarly, if a substring of size 
// “mid” is not valid(A size mid is not valid if there does not exists any substring of size 
// mid which contains all unique characters ), then all the size larger than “mid” will also 
// not be valid. This allows us to apply binary search effectively.

// Follow the steps below to solve the problem:

// Initialize low and high as 1 and string length respectively denoting the minimum and maximum possible answer.
// For any value mid check if there is any substring of length mid in the string that contains all the unique characters.
// If any such substring of length exists then update the value of answer with mid store the starting index of that substring 
// and update low to mid+1 and, check for substrings having lengths larger than mid.
// Otherwise, if any such substring does not exist then update high to mid-1 and, check for substrings having lengths smaller than mid.

// Time Complexity:  O(N*logN), where N is the length of string. 
// Auxiliary Space: O(1)


// Function to check if any substring of length mid contains
// all unique characters
function isValid(s, mid) {
    // Count the frequency of each character in the pattern
    let count = new Array(256).fill(0);
 
    let found = false;
 
    // Stores the number of distinct characters in a substring of size mid
    let distinct = 0;
 
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i)]++;
        if (count[s.charCodeAt(i)] === 1) {
            distinct++;
        }
        if (i >= mid) {
            count[s.charCodeAt(i - mid)]--;
            if (count[s.charCodeAt(i - mid)] === 0) {
                distinct--;
            }
        }
        if (i >= mid - 1) {
            // Substring of length mid found which contains
            // all the unique characters
            if (distinct === mid) {
                found = true;
            }
        }
    }
 
    return found;
}

// Function to find the longest substring containing non-repeating characters
function longestUniqueSubsttr3(s) {
    const len = s.length;
    let ans = Number.MAX_SAFE_INTEGER;
 
    // Lower bound and Upper Bound for Binary Search
    let low_bound = 1;
    let high_bound = len;
 
    // Applying Binary Search on answer
    while (low_bound <= high_bound) {
        const mid = Math.floor((low_bound + high_bound) / 2);
 
        // If a substring of length mid is found which
        // contains all unique characters, then update low_bound
        // otherwise update high_bound
        if (isValid(s, mid)) {
            ans = mid;
            low_bound = mid + 1;
        } else {
            high_bound = mid - 1;
        }
    }
 
    return ans;
}
 
// Driver code
const str3 = "qqwertyyuiot";

const len3 = longestUniqueSubsttr3(str3);
console.log(len3);

//------------------------------------------------------------------------------------------

// Length of the longest substring without repeating characters using Sliding Window:

// Intialize two pointers left and right with 0, which define the current window being considered.
// The right pointer moves from left to right, extending the current window.
// If the character at right pointer is not visited , it’s marked as visited.
// If the character at right pointer is visited, it means there is a repeating character. The 
// left pointer moves to the right while marking visited characters as false until the repeating 
// character is no longer part of the current window.
// The length of the current window (right - left + 1) is calculated and answer is updated accordingly.

// Time Complexity: O(n), Since each character is processed by the left and right pointers exactly once.
// Auxiliary Space: O(1)

function longestUniqueSubsttr4(str) {
    // if string length is 0
    if (str.length === 0)
        return 0;
 
    // if string length 1
    if (str.length === 1)
        return 1;
 
    // if string length is more than 2
    let maxLength = 0;
    let visited = new Array(256).fill(false);
 
    // left and right pointer of sliding window
    let left = 0, right = 0;
    while (right < str.length) {
 
        // if character is visited
        if (visited[str.charCodeAt(right)]) {
 
            // The left pointer moves to the right while
            // marking visited characters as false until the
            // repeating character is no longer part of the
            // current window.
            console.log('while')
            while (visited[str.charCodeAt(right)]) {
                console.log('right')
                console.log(right)
                visited[str.charCodeAt(left)] = false;
                left++;
            }
        }
 
        visited[str.charCodeAt(right)] = true;
 
        // The length of the current window (right - left + 1)
        // is calculated and the answer is updated accordingly.
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
 
    return maxLength;
}
 
 
    let s = "aabbcc";
    console.log(longestUniqueSubsttr4(s));  
      