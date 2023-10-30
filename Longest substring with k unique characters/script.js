// Find the longest substring with k unique characters in a given string

// Given a string you need to print longest possible substring that has exactly M unique 
// characters. If there is more than one substring of longest possible length, then print 
// any one of them.

// Examples: 

// Input: Str = “aabbcc”, k = 1
// Output: 2
// Explanation: Max substring can be any one from {“aa” , “bb” , “cc”}.

// Input: Str = “aabbcc”, k = 2
// Output: 4
// Explanation: Max substring can be any one from {“aabb” , “bbcc”}.

// Input: Str = “aabbcc”, k = 3
// Output: 6
// Explanation: 
// There are substrings with exactly 3 unique characters
// {“aabbcc” , “abbcc” , “aabbc” , “abbc” }
// Max is “aabbcc” with length 6.

// Input: Str = “aaabbb”, k = 3
// Output: Not enough unique characters
// Explanation: There are only two unique characters, thus show error message. 

function maxSub(str, k){
    let max = 0
    for (let i = 0; i < str.length; i++) {
        let visited = new Array(256).fill(false);
        let count = 0
        for (let j = i; j <= str.length; j++) {
            if (count === k && !visited[str.charCodeAt(j)] || count === k && j === str.length){
                max = Math.max(max, j - i)
                break
            }
            if (!visited[str.charCodeAt(j)] && count !== k || j === str.length && count !== k){
                count++
            }
            visited[str.charCodeAt(j)] = true
        }
    }
    return max
}

const input = 'aabacbebebe'  //cbebebe
const k = 3
// const input = 'aabbcc'
// const k = 3
// {“aabbcc” , “abbcc” , “aabbc” , “abbc” }

console.log(maxSub(input, k))

//-----------------------------------------------------------------------------------------

// (Linear Time) 
// The problem can be solved in O(n). Idea is to maintain a window and add elements to the 
// window till it contains less or equal k, update our result if required while doing so. 
// If unique elements exceeds than required in window, start removing the elements from left 
// side. 
// Below are the implementations of above. The implementations assume that the input string 
// alphabet contains only 26 characters (from ‘a’ to ‘z’). The code can be easily extended 
// to 256 characters. 

let MAX_CHARS = 26;

// This function calculates number of
// unique characters using a associative
// array count[]. Returns true if no. of
// characters are less than required else
// returns false.
function isValid(count, k)
{
	let val = 0;
	for(let i = 0; i < MAX_CHARS; i++)
	{
		if (count[i] > 0)
		{
			val++;
		}
	}

	// Return true if k is greater
	// than or equal to val
	return (k >= val);
}

// Finds the maximum substring
// with exactly k unique chars
function kUniques(s,k)
{
	
	// Number of unique characters
	let u = 0;
	let n = s.length;
	let count = new Array(MAX_CHARS);
	
	for(let i = 0; i < MAX_CHARS; i++)
	{
		count[i] = 0;
	}
	
	// Traverse the string, Fills
	// the associative array
	// count[] and count number
	// of unique characters
	for(let i = 0; i < n; i++)
	{
		if (count[s[i].charCodeAt(0) -
				'a'.charCodeAt(0)] == 0)
		{
			u++;
		}
		count[s[i].charCodeAt(0) -
			'a'.charCodeAt(0)]++;
	}

	// If there are not enough
	// unique characters, show
	// an error message.
	if (u < k)
	{
		console.log("Not enough unique characters");
		return;
	}

	// Otherwise take a window with
	// first element in it.
	// start and end variables.
	let curr_start = 0, curr_end = 0;

	// Also initialize values for
	// result longest window
	let max_window_size = 1;
	let max_window_start = 0;

	// Initialize associative
	// array count[] with zero
	for(let i = 0; i < MAX_CHARS; i++)
	{
		count[i] = 0;
	}

	// Start from the second character and add
	// characters in window according to above
	// explanation
	for(let i = 0; i < n; i++)
	{
		
		// Add the character 's[i]'
		// to current window
		count[s[i].charCodeAt(0) -
			'a'.charCodeAt(0)]++;
		curr_end++;

		// If there are more than k
		// unique characters in
		// current window, remove from left side
		while (!isValid(count, k))
		{
			count[s[curr_start].charCodeAt(0) -
							'a'.charCodeAt(0)]--;
			curr_start++;
		}

		// Update the max window size if required
        max_window_size = Math.max(max_window_size, curr_end - curr_start)
        max_window_start = curr_start;
	}

	console.log("Max substring is : " +
				s.substring(max_window_start,
				max_window_start +
				max_window_size + 1) +
				" with length " + max_window_size);
}

// Driver Code
let s = "aabacbebebe";
let k2 = 3;

kUniques(s, k2);

