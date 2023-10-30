// 2D Spiral Array

// Find the pattern and complete the function in js:
// int[][] spiral(int n);
// where n is the size of the 2D array.
// Sample Result
// input = 3
// output:
// 1 2 3
// 8 9 4
// 7 6 5
function spiral(n) {
    // Create an empty 2D array filled with zeros
    const result = new Array(n).fill(0).map(() => new Array(n).fill(0));
    
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    
    let currentNumber = 1;
    
    while (currentNumber <= n * n) {
      // Move right along the top row
      for (let i = left; i <= right; i++) {
        result[top][i] = currentNumber;
        currentNumber++;
      }
      top++;
      
      // Move down along the rightmost column
      for (let i = top; i <= bottom; i++) {
        result[i][right] = currentNumber;
        currentNumber++;
      }
      right--;
      
      // Move left along the bottom row
      for (let i = right; i >= left; i--) {
        result[bottom][i] = currentNumber;
        currentNumber++;
      }
      bottom--;
      
      // Move up along the leftmost column
      for (let i = bottom; i >= top; i--) {
        result[i][left] = currentNumber;
        currentNumber++;
      }
      left++;
    }
    
    return result;
  }
  
  // Example usage:
  const n = 8;
  const result = spiral(n);
  for (let row of result) {
    console.log(row.join(' '));
  }

// [ 
//     [ 0, 0, 0 ], 
//     [ 0, 0, 0 ], 
//     [ 0, 0, 0 ] 
// ]