// Given a tree with n nodes, rooted at node 0 (nodes are numbered from 0 to n-1), 
// with values assigned to nodes such that values[i] denotes the value of node i, find 
// the maximal sum of values along any path starting at some node u and going only 
// down the tree. In other words, only consider paths u1, u2, u3, ..., uk where each node 
// uiis a child of node ui-1 for 1 < is k.
// Two possible paths are 0 -› 1 -› 2-› 3 which has a sum of 5 + 7 + (-10) + 4 = 6 and 
// 1 - › 2 - › 3 with a sum of 7 + (-10) + 4 = 1. The highest sum path is 0 -› 4 with a sum 
// of 5 + 15 = 20.

// Complete the function bestSumDownwardTreePath in the editor below. It must return an 
// integer that denotes the largest sum of values along a path down the tree from any node u.

// bestSumDownward TreePath has the following parameter(s):
// parent[parent[O], parent[1]..parent[n-1JJ: an array of integers where each parent[i] 
// represents the parent node for
// node i, parent[i] = -1 means node / is the root
// values[values[O], values[1]..values[n-1]J: an array of integers where each values[i] 
// represents the value of node i

// Constraints
// • 1<n <= 105
// • parent[0] =-1
// • 0 s parentli] s n-1 for 1 sis n-1
// • -1000 < valuesfil < 1000
// • the tree described is valid

// Input from stdin will be processed as follows and passed to the function.
// In the first line, there is a single integer n, that describes the number of nodes in 
// the tree and the size of the parent array.
// Each of the next n lines contains a single integer, parenti].
// In the next line, the integer n is repeated and is the size of the values array.
// Each of the next n lines contains an integer, values[i].

// Sample Input:
// 5
// -1
// 1
// 2
// 5
// -2
// 10
// 10
// -3
// 10

// Sample Output:
// 20

function bestSumDownwardTreePath(parent, values) {
    const n = parent.length;
    const graph = new Array(n).fill().map(() => []);
    
    // Build the tree as an adjacency list
    for (let i = 1; i < n; i++) {
      graph[parent[i]].push(i);
    }
  
    let maxSum = -Infinity;
  
    function dfs(node) {
      if (node === -1) return 0;
  
      let currentSum = values[node];
  
      for (const child of graph[node]) {
        currentSum = Math.max(currentSum, values[node] + dfs(child));
      }
      maxSum = Math.max(maxSum, currentSum);

      return currentSum;
    }
  
    dfs(0); // Start DFS from the root node
  
    return maxSum;
  }

  
// Sample input
const parents = [ -1, 0, 1, 2, 0 ]
const values = [ -2, 10, 10, -3, 10 ]
//        1/10 - 2/10 - 3/-3
// 0/-2 <
//        4/10

// Call the function
const result = bestSumDownwardTreePath(parents, values);
console.log(result); // Output: 20



function checkPossibility(parent, values) {
    const MIN_INT = Number.MIN_SAFE_INTEGER;
    const DP = new Array(parent.length).fill(0);
    let maxValue = MIN_INT;

    for (let i = 0; i < parent.length; i++) {
        const p = parent[i];
        const val = values[i];

        if (p === -1) {
            // If p is the root node, the DP value should be the value of the node
            DP[i] = val;
        } else {
            // Else, the DP value should be the max of the value of the node and the value of its parent
            DP[i] = Math.max(DP[p] + val, val);
        }

        maxValue = Math.max(DP[i], maxValue);
    }

    return maxValue;
}
  

  
// Test data
const parent = [ -1, 0, 1, 2, 0, 1 ]
const value = [ -2, 10, 10, -3, 10, 30 ]
//        1/10 - 2/10 - 3/-3
// 0/-2 <
//        4/10 - 5/30

// Call the checkPossibility method
const res = checkPossibility(parent, value);
console.log(res); // Output: 40