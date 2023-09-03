// Implement the findSmallestInterval (numbers) function which returns the smallest positive interval 
// between two values of the numbers table.
// For example given the table [ 1 6 4 8 2] the smallest interval is [1]] (difference between 2 and 1)
// Constraints:
// • numbers contains at least two numbers and a maximum of 100,000 entries.
// • The solutions which favor execution time on large size arrays will get the most points.
// • The difference between two elements will never exceed the size of an integer for your language

function findSmallestInterval(numbers) {
    let interval = Math.abs(numbers[0] - numbers[1])
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (Math.abs(numbers[i] - numbers[j]) < interval) {
                interval = Math.abs(numbers[i] - numbers[j])
            }
        }
    }
    return interval
}

function makeRandom() {
    const number = Math.round(Math.random() * 10000)
    const negative  = Math.round(Math.random() * 1) === 0
    const randomNum = negative ? -Math.abs(number) : number
    return randomNum  
}

const arr = []

for (let i = 0; i < 100; i++) {
    arr.push(makeRandom())
}

console.log(arr)

// console.log(findSmallestInterval(arr))

// The code you provided finds the smallest absolute difference between any two elements in an array. 
// However, it has a time complexity of O(n^2) due to the nested loops, which can be slow for large arrays. 
// You can improve its performance by sorting the array first and then finding the smallest difference 
// between adjacent elements. Sorting takes O(n log n) time, and finding the smallest difference in 
// a sorted array takes O(n) time, resulting in a more efficient algorithm.

// Here's an optimized version of the code:

function findSmallestIntervalOpt(numbers) {
    if (numbers.length < 2) {
        return 0; // No interval to find
    }

    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);

    let interval = Number.POSITIVE_INFINITY;
    
    for (let i = 1; i < numbers.length; i++) {
        if (Math.abs(numbers[i] - numbers[i - 1]) < interval) {
            interval = Math.abs(numbers[i] - numbers[i - 1])
        }
    }

    return interval;
}

console.log(findSmallestIntervalOpt(arr))


// local and storage
// cookies 