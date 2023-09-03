// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

function numIslands(grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }
  
  let numIslands = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        numIslands++;
        dfs(grid, i, j);
      }
    }
  }
  
  return numIslands;
}

function dfs(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
    return;
  }
  
  grid[row][col] = '0'; // mark the current land as visited
  
  // Perform DFS in all four directions
  dfs(grid, row - 1, col); // up
  dfs(grid, row + 1, col); // down
  dfs(grid, row, col - 1); // left
  dfs(grid, row, col + 1); // right
}

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '1', '0', '1', '1']
];

const islands = numIslands(grid);
console.log(islands); // Output: 4

