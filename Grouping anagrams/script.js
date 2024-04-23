/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

// input: string[]
// output: string[][]

const input = ["eat","tea","tan","ate","nat","bat"]
const set = new Set
input.forEach(cur => set.add(cur))

let resSet = new Set
let res = []

function rearrange (arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = []
        const formatted = permut(arr[i].split('')).map(val => val.join(''))
        formatted.forEach(cur => {
            if (set.has(cur) && !resSet.has(cur)) {
                temp.push(cur)
                resSet.add(cur)
            }
        })
        if (temp.length > 0) res.push(temp)
    }
    return res
}

// function permut(string) {
//     if (string.length < 2) return string; // This is our break condition
  
//     var permutations = []; // This array will hold our permutations
//     for (var i = 0; i < string.length; i++) {
//       var char = string[i];
  
//       // Cause we don't want any duplicates:
//       if (string.indexOf(char) != i) // if char was used already
//         continue; // skip it this time
  
//       var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
  
//       for (var subPermutation of permut(remainingString))
//         permutations.push(char + subPermutation)
//     }
//     return permutations;
// }

function permut(string) {
    if (string.length === 1) return [string]
    if (string.length === 2) return [
        [string[0], string[1]],
        [string[1], string[0]],
    ]

    return string.map((n) => {
        const rest = string.filter(i => i !== n)
        console.log(`rest: ${rest}`)
        const per = permut(rest)
        console.log(`per: ${per}`)
        console.log(`result: ${per.map(i => [n, ...i])}`)
        return per.map(i => [n, ...i])
    }).flat(1)
}

console.log(rearrange(input))
console.log(permut('1234'.split('')))