// Given an array of N numbers and a positive integer K. The problem is to find K numbers with the most occurrences, 
// i.e., the top K numbers having the maximum frequency. If two numbers have the same frequency then the number with 
// a larger value should be given preference. The numbers should be displayed in decreasing order of their frequencies. 
// It is assumed that the array consists of at least K numbers.

// Examples: 

// Input: arr[] = {3, 1, 4, 4, 5, 2, 6, 1}, K = 2
// Output: 4 1
// Explanation:
// Frequency of 4 = 2, Frequency of 1 = 2
// These two have the maximum frequency and 4 is larger than 1.

// Input: arr[] = {7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9}, K = 4
// Output: 5 11 7 10
// Explanation: 
// Frequency of 5 = 3, Frequency of 11 = 2, Frequency of 7 = 2, Frequency of 10 = 1
// These four have the maximum frequency and 5 is largest among rest.


// Find K most occurring elements in the given Array using Map

// Follow the given steps to solve the problem:
// Create a map mp, to store key-value pair, i.e. element-frequency pair.
// Traverse the array from start to end.
// For every element in the array update mp[array[i]]++
// Store the element-frequency pair in a vector and sort the vector in decreasing order of frequency.
// Print the first k elements of the sorted array.

// Time Complexity: O(D log D), where D is the count of distinct elements in the array
// Auxiliary Space: O(D), where D is the count of distinct elements in the array

function print_N_mostFrequentNumber(arr, N, K) {
    const res = []
 
    let mp = new Map();
 
    // Put count of all the
    // distinct elements in Map
    // with element as the key &
    // count as the value.
    for (let i = 0; i < N; i++) {
 
        // Get the count for the
        // element if already present in the
        // Map or get the default value which is 0.
 
        if (mp.has(arr[i])) {
            mp.set(arr[i], mp.get(arr[i]) + 1)
        } else {
            mp.set(arr[i], 1)
        }
    }
 
    // Create a list from elements of HashMap
    let list = [...mp];
 
    // Sort the list
    list.sort((o1, o2) => {
        if (o1[1] == o2[1])
            return o2[0] - o1[0];
        else
            return o2[1] - o1[1];
    })

    for (let i = 0; i < K; i++)
        res.push(list[i][0] + " ");

    console.log(res)
}
 
// Driver's Code
let arr = [3, 1, 4, 4, 5, 2, 6, 1];
let N = arr.length;
let K = 2;
 
// Function call
print_N_mostFrequentNumber(arr, N, K); //[ '4 ', '1 ' ]

//---------------------------------------------------------------------------------------

// Find K most occurring elements in the given Array using Bucket Sort
// Create a HashMap elementCount and store the count of the elements in the given array.
// Create a 2D vector frequency of size N+1 to store the elements according to their frequencies.
// Now initialize a variable count = 0.
// While count < K:
// Traverse the frequency vector from N till 0 and print the elements present in the vector and increment the count for each element.

// Time Complexity: O(N logN), where N is the size of the given array. worst case is when all the elements are the same, 
// we are sorting the entire vector.
// Auxiliary Space: O(N)

function print_N_mostFrequentNumber2(arr, N , K)
{
 
    // HashMap to store count of the elements
    var elementCount = new Map();
     
    for(let i=0;i<N;i++){
        if(elementCount.has(arr[i])){
            var temp = elementCount.get(arr[i]);
            elementCount.set(arr[i], temp+1);
        }
        else{
            elementCount.set(arr[i], 1);
        }
    }
     
    // Array to store the elements according
    // to their frequency
    var frequency = new Array(N+1);
     
    for(let i=0;i<=N;i++){
        frequency[i] = new Array();
    }

    // Inserting elements in the frequency array
    for (const [key, value] of elementCount.entries()) {
        frequency[value].push(key);
    }

    let count = 0;
     
    for(let i=N;i>=0;i--){
        for(var j=frequency[i].length-1;j>=0;j--){
            count++;
            console.log(frequency[i][j] + " ");
        }
        // if K elements have been printed
        if(count==K){
            return;
        }
    }
    return;
}
 
let arr2 = [ 3, 1, 4, 4, 5, 2, 6, 1 ];
let N2 = arr.length;
let K2 = 2;
 
// Function call
print_N_mostFrequentNumber2(arr2, N2, K2);

//---------------------------------------------------------------------------------------

// Find K most occurring elements in the given Array using Quick Select:

// In quick select we partition the array of unique numbers in such a way that the elements to the left of pivotpivotpivot 
// are more frequent than pivot, and elements to the right of pivotare less frequent than pivot. Thus we can say the pivotis 
// in its sorted position. We randomly chose such pivot until we finally find its sorted position to be K. Then we know that 
// all the elements to the left of pivot are more frequent than pivotand each time we reduce our paritioning space w.r.t 
// the pivot.

// Time complexity:  O(n)
// Auxiliary Space: O(N)

function printNMostFrequentNumber(nums, k, out) {
    // Count the occurrences of each number
    let counts = new Map();
    for (let num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
 
    // Get the k numbers with the highest occurrences
    let mostFrequent = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, k);
 
    // Extract the numbers from the most frequent pairs
    let numbers = mostFrequent.map(([num, _]) => num);
 
    // Store the numbers in the output array
    for (let i = 0; i < numbers.length; i++) {
        out[i] = numbers[i];
    }
 
    return out;
}
 
// Driver's code
let arr3 = [3, 1, 4, 4, 5, 2, 6, 1];
let K3 = 2;
 
// Function call
let ans = new Array(K).fill(0);
printNMostFrequentNumber(arr3, K3, ans);