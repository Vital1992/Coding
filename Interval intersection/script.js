// Interval List Intersections

// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] 
// and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty or represented as 
// a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

// let firstList = [[0,2],[5,10],[13,23],[24,25]]
// let secondList = [[1,5],[8,12],[15,24],[25,26]]
// let firstList = [[3,5],[9,20]]
// let secondList = [[4,5],[7,10],[11,12],[14,15],[16,20]]
// let firstList = [[0,5],[12,14],[15,18]]
// let secondList = [[11,15],[18,19]]
let firstList = [[2,5],[7,8],[11,13],[18,20]]
let secondList = [[0,12]] // expected: [[2,5],[7,8],[11,12]]

const intervalIntersection = function(firstList, secondList) {
    let bigList = [...firstList, ...secondList]
    bigList = bigList.sort((a, b) => {
        if (a[0] === b[0]) {
          // If the first elements are equal, sort by the second element
          return a[1] - b[1];
        } else {
          // Otherwise, sort by the first element
          return a[0] - b[0];
        }
      });
    console.log(bigList)
    const res = []
    let biggestEnd = [bigList[0][0], bigList[0][1]]
    for (let i = 1; i < bigList.length; i++) {
        if (bigList[i][0] <= bigList[i - 1][1]) {
            res.push([bigList[i][0], Math.min(bigList[i - 1][1], bigList[i][1])])
        } else if (bigList[i][0] <= biggestEnd[1]) {
            res.push([bigList[i][0], Math.min(biggestEnd[1], bigList[i][1])])
        }
        biggestEnd = biggestEnd[1] < bigList[i][1] ? [bigList[i][0], bigList[i][1]] : biggestEnd
        console.log(biggestEnd)
    }
    return res
};

console.log(intervalIntersection(firstList, secondList))