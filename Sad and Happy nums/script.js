// All positive integers are either “happy” or “sad”.

// To determine happiness, we execute an algorithm. The “algorithm”: sum the squares of the digits of the number, then repeat.

// Any valid input to the algorithm will always result in either a “1” state or a finite cycle with a repeated input.

// 7 is an example of a happy number:

// 7 → 49 → 97 → 130 → 10 → 1. (happy number)

// 2 is an example of a sad number:

// 2 → 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 → 16 … (note the cycle; will never terminate)

// The following numbers in [1..20] are happy: 1, 7, 10, 13, 19.

function numOfSquares(n){
  return n.toString().split('').reduce((sum, digit) => sum + Math.pow(digit, 2), 0)
}

function isHappy(n){
  let seen = new Set()
   while (n !==1 && !seen.has(n)){
    seen.add(n)
    n = numOfSquares(n)
   }
   return n === 1
}


for (let i = 1; i <= 20; i++){
  if (isHappy(i)) {
    console.log(`${i} is a happy number`)
  } else {
    console.log(`${i} is a sad number`)
  }
}