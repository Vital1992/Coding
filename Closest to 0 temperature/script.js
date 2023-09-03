// Implement the function computeClosestToZero (ts) which takes an array of temperatures [ts] and returns the temperature closest to 0.
// Constraints:
// • If the array is empty, the function should return 0
// • 0 ≤ Its size ≤ 10000
// • If two temperatures are equally close to zero, the positive temperature must be returned. For example, if the input is -5 and 5, then 5 must be returned

function computeClosestToZero(ts) {
    if (ts.length === 0){
      return 0
    }
    let closestIdx = 0
  
    for (let i = 0; i < ts.length; i++) {
      if (ts[closestIdx] > Math.abs(ts[i])){
        closestIdx = i
      }
      if (Math.abs(ts[closestIdx]) === Math.abs(ts[i]) && ts[closestIdx] < 0){
        closestIdx = i
      }
    }
    return ts[closestIdx]
  }
  
  const arr = [1,5,6,-1]
  console.log(computeClosestToZero(arr))