// Print Left View of a Binary Tree

// Given a Binary Tree, the task is to print the left view of the Binary Tree. The left view of a Binary Tree is a set of 
// leftmost nodes for every level.

// Examples: 

// Input: 
//                    4
//                 /   \
//               5     2
//                    /   \
//                 3     1
//               /  \
//            6    7

// Output: 4 5 3 6

// Input:
//          1
//       /   \
//     2       3
//       \   
//        4  
//          \
//           5
//             \
//              6
// Output: 1 2 4 5 6

// -----------------------------------------------------------------------------------------------------------------------

// Print Left View of a Binary Tree Using Recursion

// Keep track of the level of a node by passing the level as a parameter to all recursive calls and also keep track of the 
// maximum level. Whenever, we see a node whose level is more than maximum level so far, we print the node because this is 
// the first node in its level 

// Note: We traverse the left subtree before right subtree. 

// Time Complexity: O(N), The function does a simple traversal of the tree, so the complexity is O(n). 
// Auxiliary Space: O(h), due to the stack space during recursive call. ‘h’ here is the height of the binary tree.

class Node 
{
    constructor(item)
    {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}
 
// Class to print the left view 
var root ;
var max_level = 0;
 
// Recursive function to print left view
function leftViewUtil(node, level)
{
    // Base Case
    if (node == null) 
    {
        return;
    }
     
    // If this is the first node of its level
    if (max_level < level)
    {
        console.log(node.data);
        max_level = level;
    }

    // Recur for left and right subtrees
    leftViewUtil(node.left, level + 1);
    leftViewUtil(node.right, level + 1);
}
 
// A wrapper over leftViewUtil()
function leftView()
{
    leftViewUtil(root, 1);
}
 
// Driver code
 
// Testing for example nodes 
// Creating a binary tree and 
// entering the nodes 
// root = new Node(10)
// root.left = new Node(2) 
// root.right = new Node(3)
// root.left.left = new Node(7)
// root.left.right = new Node(8) 
// root.right.right = new Node(15) 
// root.right.left = new Node(12)
// root.right.right.left = new Node(14)    

root = new Node(4)
root.left = new Node(5)
root.right = new Node(2)
root.right.left = new Node(3)
root.right.right = new Node(1)
root.right.left.left = new Node(6)
root.right.left.rigth = new Node(7)
 
 
leftView();

// -----------------------------------------------------------------------------------------------------------------------

// Print Left View of a Binary Tree Using Level Order Traversal: 

// Below is the idea to solve the problem:

// The left view contains all nodes that are the first nodes in their levels. A simple solution is to do level order traversal 
// and print the first node in every level. 

// Follow the below step to Implement the idea:

// Do level order traversal of the tree.
// For each level keep a track of the current level and print the first encountered node of this level.
// Move to the next level.

// Time Complexity: O(N), where n is the number of nodes in the binary tree.
// Auxiliary Space: O(N) since using space for auxiliary queue

class newNode{
 
    // Construct to create a newNode
    constructor(key){
        this.data = key
        this.left = null
        this.right = null
        this.hd = 0
    }
}
 
// function to print left view of
// binary tree
function printLeftView(root){
 
    if (root == null)
        return
 
    let q = []
    q.push(root)
 
    while (q.length){
 
        // number of nodes at current level
        let n = q.length
 
        // Traverse all nodes of current level
        for(let i=1;i< n + 1;i++){
            let temp = q.shift()
 
            // Print the left most element
            // at the level
            if (i == 1)
                console.log(temp.data)
 
            // Add left node to queue
            if (temp.left != null)
                q.push(temp.left)
 
            // Add right node to queue
            if (temp.right != null)
                q.push(temp.right)
        }
    }
}
 
// Driver Code
let root = new newNode(10)
root.left = new newNode(2)
root.right = new newNode(3)
root.left.left = new newNode(7)
root.left.right = new newNode(8)
root.right.right = new newNode(15)
root.right.left = new newNode(12)
root.right.right.left = new newNode(14)
printLeftView(root)