// Maximum Path Sum in a Binary Tree

// Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree.

// Example: 

// Input: Root of below tree

//        1
//       / \
//      2   3

// Output: 6

// Input:
                                    //      10
                                    //     /  \
                                    //    2    10
                                    //   / \     \
                                    //  20  1    -25
                                    //           / \
                                    //          3   4
// Output: 42 (10 + 2 + 10 + 20)
// Explanation: Max path sum is represented using green color nodes in the above binary tree

//----------------------------------------------------------------------------------------------------------------------
 
// Approach: To solve the problem follow the below idea:

// For each node there can be four ways that the max path goes through the node: 

// Node only 
// Max path through Left Child + Node 
// Max path through Right Child + Node 
// Max path through Left Child + Node + Max path through Right Child
// The idea is to keep track of four paths and pick up the max one in the end. An important thing to note is, that the root 
// of every subtree needs to return the maximum path sum such that at most one child of the root is involved. This is needed 
// for the parent function call. In the below code, this sum is stored in ‘max_single’ and returned by the recursive function.

// Follow the given steps to solve the problem:

// If the root is NULL, return 0(Base Case)
// Call the recursive function to find the max sum for the left and the right subtree
// In a variable store the maximum of (root->data, maximum of (leftSum, rightSum) + root->data)
// In another variable store the maximum of previous step and root->data + leftSum + rightSum
// Return the maximum of the previous step

// Time Complexity: O(N) where N is the number of nodes in the Binary Tree
// Auxiliary Space: O(N)

class Node
{
    constructor(item) {
       this.left = null;
       this.right = null;
       this.data = item;
    }
}
 
let val;
 
// Root of the Binary Tree
let root;

// This function returns overall maximum path sum in 'res'
// And returns max path sum going through root.
function findMaxUtil(node)
{

    // Base Case
    if (node == null)
        return 0;

    // l and r store maximum path sum going through left and
    // right child of root respectively
    let l = findMaxUtil(node.left);
    let r = findMaxUtil(node.right);

    // Max path for parent call of root. This path must
    // include at-most one child of root
    let max_single = Math.max(Math.max(l, r) + node.data,
                              node.data);


    // Max Top represents the sum when the Node under
    // consideration is the root of the maxsum path and no
    // ancestors of root are there in max sum path
    let max_top = Math.max(max_single, l + r + node.data);

    // Store the Maximum Result.
    val = Math.max(val, max_top);

    return max_single;
}

function findMaxsum() {
    return findMaxSum(root);
}

// Returns maximum path sum in tree with given root
function findMaxSum(node) {

    // Initialize result
    val = Number.MIN_VALUE;

    // Compute and return result
    findMaxUtil(node);
    return val;
}
 
root = new Node(10);
root.left = new Node(2);
root.right = new Node(10);
root.left.left = new Node(20);
root.left.right = new Node(1);
root.right.right = new Node(-25);
root.right.right.left = new Node(3);
root.right.right.right = new Node(4);
console.log("Max path sum is : " + findMaxsum());
