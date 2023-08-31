// You are given a string S. In one move you can erase from S a pair of identical letters. Find the shortest possible string that can be created this way. If there are many such strings, choose the alphabetically (lexicographically) smallest one. Note that there is no limit to the number of moves.
// Write a function:
// function solution (S);
// that, given a string S of length N, returns the shortest string (or the first alphabetically, in the case of a draw) created by erasing pairs of identical letters from S
// Examples:
// 1. For S = "CBCAAXA" you can make, for example, two moves:
// • first erase a pair of letters "c": "CBCAAXA" -* "BAAXA".
// • then erase a pair of letters "A": "BAAXA" -+ "BAX".
// Thus the string "BAX" is created. There is no way to create a shorter string. The other string of length 3 that can be created is "BXA", but "BAX" is the first alphabetically. The function should return "BAX"
// 2. For S = "ZYXZYZY", two moves can be made:
// • first erase a pair of letters "y*: "ZYXZYZY" -* "ZXZYZ",
// • then erase a pair of letters "z": "ZXZYZ" - "XYZ".
// The other strings of length 3 that can be created are "ZYX", "YXZ", "XZY" and "ZXY", but
// "XYz" is alphabetically the first, so the function should return "XYz".
// 3. For S = "ABCBACDDAA" all five pairs of identical letters can be erased. The function
// should return "' (empty string).
// 4. For S = "AKFKFMOGKFB" the function should return "AFKMOGB".
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range [1...100,000); string S is made only of uppercase letters (A-Z).


function solution(str) {
  const arr = str.split('')
  let duplicatesIndexes = []
  for (let i = 0; i < arr.length; i++) {
    let idxs = findIdxs(arr, arr[i], duplicatesIndexes) // Find indexes at which we have duplicate chars
    duplicatesIndexes.push(idxs)
  }
  const tripleCombinations = [] // All possible combinations of triple duplicates removed
  const extraTripleCombinations = [] // All possible combinations of multi sets of triple duplicates removed 
  let tempArr = []
  let counter = 0
  let resultsArr = []

  duplicatesIndexes.filter(n => n).sort((a, b) => { // Remove empty elements from arr and sort by size of indexes array 
    // to remove just dups first and triple dups after
    return a.length - b.length;
  }).forEach((cur) => {

    if (cur.length > 1 && cur.length % 2 === 0) { // For just double dups
      cur.forEach((el) => {
        arr[el] = ''
      })
    }

    if (cur.length > 1 && cur.length % 2 !== 0) { // For triple dups
      counter = counter + 1

      if (counter <= 1) { // First set of triple duplicates
        for (let i = 0; i < cur.length - 1; i++) {
          for (let j = i + 1; j < cur.length; j++) {
            tempArr = [...arr];
            tempArr[cur[i]] = ''
            tempArr[cur[j]] = ''
            tripleCombinations.push(tempArr)
          }
        }
      }


      if (counter > 1) { // If there's more sets of triple duplicates
        tripleCombinations.forEach((combination) => {
          for (let i = 0; i < cur.length - 1; i++) {
            for (let j = i + 1; j < cur.length; j++) {
              tempArr = [...combination];
              tempArr[cur[i]] = ''
              tempArr[cur[j]] = ''
              extraTripleCombinations.push(tempArr)
            }
          }
        })
      }

    }
  })
  // Remove empty values and convert arr to string
  if (counter > 1) {
    resultsArr = extraTripleCombinations.map((val) => val.filter(n => n).join(''))
  } else {
    resultsArr = tripleCombinations.map((val) => val.filter(n => n).join(''))
  }
  return resultsArr.length > 0 ? resultsArr.sort()[0] : '' // Return first alphabetically sorted value
}

function findIdxs(arr, val, existingIndexes) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val){
      res.push(i)
    }
  }
  existingIndexes.map((cur) => {
    if (JSON.stringify(cur) === JSON.stringify(res)) {
      res = '' // If we already have positon of duplicates from previous loop then don't put duplicate indexes
    }
  })
  return res
}

// Test cases
console.log(solution("CBCAAXA"));  // Output: "BAX"
console.log(solution("ZYXZYZY"));  // Output: "XYZ"
console.log(solution("ABCBACDDAA"));  // Output: ""
console.log(solution("AKFKFMOGKFB"));  // Output: "AFKMOGB"