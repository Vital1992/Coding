// Lowest Common Ancestor in a Binary Tree

// What is Lowest Common Ancestor in Binary Tree?
// The lowest common ancestor is the lowest node in the tree that has both n1 and n2 as descendants, where n1 and n2 are the 
// nodes for which we wish to find the LCA. Hence, the LCA of a binary tree with nodes n1 and n2 is the shared ancestor of 
// n1 and n2 that is located farthest from the root. 

// Application of Lowest Common Ancestor(LCA):
// To determine the distance between pairs of nodes in a tree: the distance from n1 to n2 can be computed as the distance 
// from the root to n1, plus the distance from the root to n2, minus twice the distance from the root to their lowest 
// common ancestor.

//----------------------------------------------------------------------------------------------------------------------
// Lowest Common Ancestor in a Binary Tree By Storing paths from root to n1 and root to n2: 

// The idea of this approach is to store the path from the root to n1 and root to n2 in two separate data structures. 
// Then look simultaneously into the values stored in the data structure, and look for the first mismatch.

            //        1
            //     /    \
            //    2      3
            //   / \    / \
            //  4   5  6   7       LCA(5,6) = 1
// Path from root to 5 = { 1, 2, 5 }
// Path from root to 6 = { 1, 3, 6 }

// We start checking from 0 index. As both of the value matches( pathA[0] = pathB[0] ), we move to the next index.
// pathA[1] not equals to pathB[1], there’s a mismatch so we consider the previous value. 
// Therefore the LCA of (5,6) = 1

// Time Complexity: O(N). The tree is traversed twice, and then path arrays are compared. 
// Auxiliary Space: O(N). Extra Space for path1 and path2.

class Node
{
    constructor(value) {
       this.left = null;
       this.right = null;
       this.data = value;
    }
}
 
let root;
let path1 = [];
let path2 = [];

// Finds the path from root node to given root of the tree.
function findLCA(n1, n2) {
    path1 = [];
    path2 = [];
    return findLCAInternal(root, n1, n2);
}

function findLCAInternal(root, n1, n2) {

    if (!findPath(root, n1, path1) || !findPath(root, n2, path2)) 
    {
        console.log((path1.length > 0) ? 
        "n1 is present" : "n1 is missing");
        console.log((path2.length > 0) ? 
        "n2 is present" : "n2 is missing");
        return -1;
    }
    console.log(path1)
    console.log(path2)
    let i;
    for (i = 0; i < path1.length && i < path2.length; i++) {
        if (path1[i] != path2[i])
            break;
    }

    return path1[i-1];
}
  
// Finds the path from root node to 
// given root of the tree, Stores the
// path in a vector path[], returns true
// if path exists otherwise false
function findPath(root, n, path)
{
    // base case
    if (root == null) {
        return false;
    }
      
    // Store this node . The node will be removed if
    // not in path from root to n.
    path.push(root.data);

    if (root.data == n) {
        return true;
    }

    if (root.left != null && findPath(root.left, n, path)) {
        return true;
    }

    if (root.right != null && findPath(root.right, n, path)) {
        return true;
    }

    // If not present in subtree rooted with root, 
    // remove root from
    // path[] and return false
    path.pop();

    return false;
}
 
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("LCA(4, 5) = " + findLCA(4,5));
console.log("LCA(4, 6) = " + findLCA(4,6));
console.log("LCA(3, 4) = " + findLCA(3,4));
console.log("LCA(2, 4) = " + findLCA(2,4));

//----------------------------------------------------------------------------------------------------------------------

// Lowest Common Ancestor in a Binary Tree By Single Traversal:
// The idea is to traverse the tree starting from the root. If any of the given keys (n1 and n2) matches with the root, 
// then the root is LCA (assuming that both keys are present). If the root doesn’t match with any of the keys, we recur 
// for the left and right subtree. 

// The node which has one key present in its left subtree and the other key present in the right subtree is the LCA. 
// If both keys lie in the left subtree, then the left subtree has LCA also, 
// Otherwise, LCA lies in the right subtree.  

// Root is pointing to the node with value 1, as its value doesn’t match with { 5, 6 }. We look for the key in left subtree and right subtree.

// Left Subtree :
// New Root = { 2 } ≠ 5 or 6, hence we will continue our recursion
// New Root = { 4 } , it’s left and right subtree is null, we will return NULL for this call
// New Root = { 5 } , value matches with 5 so will return the node with value 5
// The function call for root with value 2 will return a value of 5
// Right Subtree :
// Root = { 3 } ≠ 5 or 6 hence we continue our recursion
// Root = { 6 } = 5 or 6 , we will return the this node with value 6 
// Root = { 7 } ≠ 5 or 6, we will return NULL
// So the function call for root with value 3 will return node with value 6
// As both the left subtree and right subtree of the node with value 1 is not NULL, so 1 is the LCA
// Follow the steps below to solve the problem:

// We pass the root to a helper function and check if the value of the root matches any of n1 and n2. 
// If YES, return the root
// else recursive call on the left and right subtree
// Basically, we do pre-order traversal, at first we check if the root->value matches with n1 or n2. Then traverse on the left and right subtree.
// If there is any root that returns one NULL and another NON-NULL value, we shall return the corresponding NON-NULL value for that node.
// The node that returns both NON-NULL values for both the left and right subtree, is our Lowest Common Ancestor.

// Time Complexity: O(N) as the method does a simple tree traversal in a bottom-up fashion. 
// Auxiliary Space: O(H), where H is the height of the tree.

class Node
    {
        constructor(item) {
           this.left = null;
           this.right = null;
           this.data = item;
        }
    }
     
    //Root of the Binary Tree
    let root;
  
    function findlCA(n1, n2)
    {
        return findLCA(root, n1, n2);
    }
  
    // This function returns pointer to LCA of two given
    // values n1 and n2. This function assumes that n1 and
    // n2 are present in Binary Tree
    function findLCA(node, n1, n2)
    {
        // Base case
        if (node == null)
            return null;
  
        // If either n1 or n2 matches with root's key, report
        // the presence by returning root (Note that if a key is
        // ancestor of other, then the ancestor key becomes LCA
        if (node.data == n1 || node.data == n2)
            return node;
  
        // Look for keys in left and right subtrees
        let left_lca = findLCA(node.left, n1, n2);
        let right_lca = findLCA(node.right, n1, n2);
  
        // If both of the above calls return Non-NULL, then one key
        // is present in once subtree and other is present in other,
        // So this node is the LCA
        if (left_lca!=null && right_lca!=null)
            return node;
  
        // Otherwise check if left subtree or right subtree is LCA
        return (left_lca != null) ? left_lca : right_lca;
    }
     
    root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);
    console.log("LCA(4, 5) = " +
                       findlCA(4, 5).data);
    console.log("LCA(4, 6) = " +
                       findlCA(4, 6).data);
    console.log("LCA(3, 4) = " +
                       findlCA(3, 4).data);
    console.log("LCA(2, 4) = " +
                       findlCA(2, 4).data);

//----------------------------------------------------------------------------------------------------------------------

// Using an Auxiliary data structure (hash table):

// The basic idea behind the "Using an auxiliary data structure" approach for finding the lowest common ancestor of two nodes 
// in a binary tree is to use a hash table or a map to store the parent pointers of each node. Once we have the parent 
// pointers, we can traverse up from the first node and add all its ancestors to a set or a list. Then we can traverse up 
// from the second node and check if each ancestor is already in the set or the list. The first ancestor that is already in 
// the set or the list is the lowest common ancestor.
// Follow the steps to implement the above approach:

// Create a hash table or a map to store the parent pointers of each node in the binary tree.
// Traverse the binary tree and populate the hash table or the map with the parent pointers for each node.
// Starting from the first node, traverse up the tree and add each ancestor to a set or a list.
// Starting from the second node, traverse up the tree and check if each ancestor is already in the set or the list. 
// The first ancestor that is already in the set or the list is the lowest common ancestor.
// If no common ancestor is found, return null or any other value that indicates the absence of a common ancestor.

// Time Complexity: O(n)

class Node {
    constructor(item) {
      this.data = item;
      this.left = null;
      this.right = null;
    }
  }
   
  // Function to build a hash table or a map of parent
  // pointers for each node in the tree
  function buildParentMap(root) {
    const parentMap = new Map();
    parentMap.set(root, null);
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.left != null) {
        parentMap.set(node.left, node);
        queue.push(node.left);
      }
      if (node.right != null) {
        parentMap.set(node.right, node);
        queue.push(node.right);
      }
    }
    return parentMap;
  }
   
  // Function to find the lowest common ancestor of two
  // nodes using an auxiliary data structure
  function findLCA(root, n1, n2) {
    // Build a hash table or a map of parent pointers
    // for each node in the tree
    const parentMap = buildParentMap(root);
   
    // Find the nodes with values n1 and n2
    let p = null, q = null;
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
      const node = queue.shift();
      if (node.data === n1) {
        p = node;
      }
      if (node.data === n2) {
        q = node;
      }
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
   
    // Add all the ancestors of the first node to a set
    // or a list
    const ancestors = new Set();
    while (p != null) {
      ancestors.add(p);
      p = parentMap.get(p);
    }
   
    // Traverse up from the second node and check if
    // each ancestor is already in the set or the list
    while (q != null) {
      if (ancestors.has(q)) {
        return q.data;
      }
      q = parentMap.get(q);
    }
   
    return -1; // No common ancestor found
  }
   
  // Test the function
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
   
  console.log("LCA(4, 5) = " + findLCA(root, 4, 5));
  console.log("LCA(4, 6) = " + findLCA(root, 4, 6));
  console.log("LCA(3, 4) = " + findLCA(root, 3, 4));
  console.log("LCA(2, 4) = " + findLCA(root, 2, 4));