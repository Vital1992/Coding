// Given an array of N distinct elements, find the minimum number of swaps required to sort the array.

// Examples: 

// Input: {4, 3, 2, 1}
// Output: 2
// Explanation: Swap index 0 with 3 and 1 with 2 to form the sorted array {1, 2, 3, 4}

// Input: {1, 5, 4, 3, 2}
// Output: 2

// Follow the below steps to solve the problem:

// Create an array of pairs arrPos to store the input array elements along with their index
// Sort arrPos and run a loop for i [0, N]
// If the current element is already visited or it is at its correct position then continue
// Else calculate the cycle size from the current element using a while loop
// Declare an integer j equal to i and in the while loop set j equal to the index of arrPos[j] and increase cycle size while the element at jth position is not visited
// Increase the answer by the size of the current cycle – 1
// Return answer

// JavaScript program to find
// minimum number of swaps
// required to sort an array
 
// Function returns the
// minimum number of swaps
// required to sort the array
function minSwaps(arr)
{
    let n = arr.length;
  
        // Create two arrays and
        // use as pairs where first
        // array is element and second array
        // is position of first element
        let arrpos = [];
        for (let i = 0; i < n; i++)
             arrpos.push([arr[i], i]);
  
        // Sort the array by array element values to
        // get right position of every element as the
        // elements of second array.
        arrpos.sort(function(a,b){return a[0]-b[0];});
  
        // To keep track of visited elements. Initialize
        // all elements as not visited or false.
        let vis = new Array(n);
        for(let i=0;i<n;i++)
        {
            vis[i]=false;
        }
         
  
        // Initialize result
        let ans = 0;

        // Traverse array elements
        for (let i = 0; i < n; i++)
        {
            // already swapped and corrected or
            // already present at correct pos
            if (vis[i] || arrpos[i][1] == i)
                continue;
  
            // find out the number of  node in
            // this cycle and add in ans
            let cycle_size = 0;
            let j = i;
            while (!vis[j])
            {
                vis[j] = true;
  
                // move to next node
                 
                j = arrpos[j][1];
                 
                cycle_size++;
            }
  
            // Update answer by adding current cycle.
            if(cycle_size > 0)
            {
                ans += (cycle_size - 1);
            }
        }
  
        // Return result
        return ans;
}
 
// Driver class
let a=[1, 5, 4, 3, 2];
console.log(minSwaps(a))

// ------------------------------------------------------------

// Function returns the
// minimum number of swaps
// required to sort the array
function minSwaps2(nums) {
  var len = nums.length;
  var map = new Map();
  for (i = 0; i < len; i++)
      map.set(nums[i], i);

  nums.sort((a,b)=>a-b);

  // To keep track of visited elements. Initialize
  // all elements as not visited or false.
  var visited = Array(len).fill(false);
    
  // Initialize result
  var ans = 0;
  for (var i = 0; i < len; i++) {

      // already swapped and corrected or
      // already present at correct pos
      if (visited[i] || map.get(nums[i]) == i)
          continue;

      var j = i, cycle_size = 0;
      while (!visited[j]) {
          visited[j] = true;

          // move to next node
          j = map.get(nums[j]);
          cycle_size++;
      }

      // Update answer by adding current cycle.
      if (cycle_size > 0) {
          ans += (cycle_size - 1);
      }
  }
  return ans;
}

// Driver program to test the above function
var a2 = [ 1, 5, 4, 3, 2 ];
console.log(minSwaps2(a2));

// ------------------------------------------------------------


// Function returns the
// minimum number of swaps
// required to sort the array
function minSwaps3(nums) {
  var len = nums.length;
  var map = new Map();
  for (i = 0; i < len; i++)
      map.set(nums[i], i);

  nums.sort((a,b)=>a-b);

  // To keep track of visited elements. Initialize
  // all elements as not visited or false.
  var visited = Array(len).fill(false);
    
  // Initialize result
  var ans = 0;
  for (var i = 0; i < len; i++) {

      // already swapped and corrected or
      // already present at correct pos
      if (visited[i] || map.get(nums[i]) == i)
          continue;

      var j = i, cycle_size = 0;
      while (!visited[j]) {
          visited[j] = true;

          // move to next node
          j = map.get(nums[j]);
          cycle_size++;
      }

      // Update answer by adding current cycle.
      if (cycle_size > 0) {
          ans += (cycle_size - 1);
      }
  }
  return ans;
}

// Driver program to test the above function
var a3 = [ 1, 5, 4, 3, 2 ];
console.log(minSwaps3(a3));

// ------------------------------------------------------------

// The minimum number of swaps required to sort an array using a greedy algorithm: 

// To solve the problem follow the below idea:

// While iterating over the array, check the current element, and if not in the correct place, replace that element with the index of the element which should have come to this place greedily which will give the optimal answer

// Follow the below steps to solve the problem:

// Create a new array and copy the elements of the input array
// Sort the new array and declare a variable ans equal to 0
// Run a for loop to traverse the elements
// If the current element in the sorted array is not equal to the one in the input array then increase the ans by 1
// And swap the current element, with the required element at this index
// Return ans 

// Javascript program to find
// minimum number of swaps
// required to sort an array
     
// Return the minimum number
// of swaps required to sort the array
function minSwaps4(arr,N)
{
    let ans = 0;
    let temp = [...arr];
    temp.sort(function(a,b){return a-b;});
    for (let i = 0; i < N; i++)
    {

        // This is checking whether
        // the current element is
        // at the right place or not
        if (arr[i] != temp[i])
        {
            ans++;

            // Swap the current element
            // with the right index
            // so that arr[0] to arr[i] is sorted
            swap(arr, i, indexOf(arr, temp[i]));
        }
    }
    return ans;
}
  
function swap(arr,i,j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;   
}
  
function indexOf(arr,ele)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == ele) {
            return i;
        }
    }
    return -1;
}
  
// Driver class
let a4=[101, 758, 315, 730, 472, 619, 460, 479 ];
let n = a4.length;
console.log(minSwaps4(a4, n));

// ------------------------------------------------------------

// JavaScript program to find
// minimum number of swaps
// required to sort an array
function swap(arr, i, j)
{
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
 
// Return the minimum number
// of swaps required to sort
// the array
function minSwaps5(arr,N)
{
  let ans = 0;
  let temp = arr.slice();
 
  // Hashmap which stores the
  // indexes of the input array
  let h = new Map();
 
  temp.sort((a, b) => { 
    return a - b;
  })
  for (let i = 0; i < N; i++)
  {
    h.set(arr[i], i);
  }

  for (let i = 0; i < N; i++)
  {
    // This is checking whether
    // the current element is
    // at the right place or not
    if (arr[i] != temp[i])
    {
      ans++;
      let init = arr[i];
 
      // If not, swap this element
      // with the index of the
      // element which should come here
      swap(arr, i, h.get(temp[i]));
 
      // Update the indexes in
      // the hashmap accordingly
      h.set(init,h.get(temp[i]));
      h.set(temp[i],i);
    }
  }
  return ans;
}
 
// Driver class
 
// Driver program to
// test the above function
let A = [5, 3, 9, 2, 7, 77, 12, 8];
let N = A.length;


   
// Output will be 5
console.log(minSwaps5(A, N));
