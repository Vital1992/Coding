/*

Print All Diagonals of a Matrix

Given an MxN matrix, write code which prints out the longest right-to-left diagonals (i.e. from upper right to lower left) of the matrix.


In this example where M = 4 and N = 3:

[[9, 3, 2],
 [8, 6, 1],
 [5, 5, 6],
 [1, 2, 8]]

Your code should print out:

9
3 8
2 6 5
1 5 1
6 2
8

*/
function printLongestDiagonals(matrix) {
    const res = []
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i > 0 && j < matrix[i].length-1){
            continue;
        }
        printDiagonal(matrix, i, j);
      }
    }
  }

  // Example usage
  const matrix = 
  [[9, 3, 2],
   [8, 6, 1],
   [5, 5, 6],
   [1, 2, 8]]

  // const matrix = [
  //   [1, 2, 3, 4],
  //   [5, 6, 7, 8],
  //   [9, 10, 11, 12],
  //   [13, 14, 15, 16]
  // ];

  printLongestDiagonals(matrix);

  function printDiagonal(matrix, x, y) {
    const res = [];
    
    while (y !== -1 && x <= matrix.length-1) {
      res.push(matrix[x][y])
      x = x + 1;
      y = y - 1;
    }
    console.log(res)
  }