// Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.
 

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
 

// Constraints:
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Detect loop in a linked list using Hashing:

// The idea is to insert the nodes in the hashmap and whenever a node is encountered that is already present in the hashmap 
// then return true.

// Follow the steps below to solve the problem:

// Traverse the list individually and keep putting the node addresses in a Hash Table. 
// At any point, if NULL is reached then return false 
// If the next of the current nodes points to any of the previously stored nodes in  Hash then return true.
// Below is the implementation of the above approach:

var head; // head of list
 
/* Linked list Node */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
/* Inserts a new Node at front of the list. */
  function push(new_data) {
    /*
     * 1 & 2: Allocate the Node & Put in the data
     */
    var new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = head;

    /* 4. Move the head to point to new Node */
    head = new_node;
}

// Returns true if there is a loop in linked
// list else returns false.
function detectLoop(h) {
    var s = new Set();
    while (h != null) {
        // If we have already has this node
        // in hashmap it means there is a cycle
        // (Because you we encountering the
        // node second time).
        if (s.has(h))
            return true;

        // If we are seeing the node for
        // the first time, insert it in hash
        s.add(h);

        h = h.next;
    }

    return false;
}

/* Driver program to test above function */
 

    push(20);
    push(4);
    push(15);
    push(10);

    /* Create loop for testing */
    head.next.next.next.next = head;

    if (detectLoop(head))
        console.log("Loop Found");
    else
        console.log("No Loop");

// Detect loop in a linked list using Floyd’s Cycle-Finding Algorithm:

// This algorithm is used to find a loop in a linked list. It uses two pointers one moving twice as fast as the other one. 
// The faster one is called the faster pointer and the other one is called the slow pointer.

// Follow the steps below to solve the problem:

// Traverse linked list using two pointers.
// Move one pointer(slow_p) by one and another pointer(fast_p) by two.
// If these pointers meet at the same node then there is a loop. If pointers do not meet then the linked list doesn’t have a loop.

function detectLoop2()
{
    let slow_p = head, fast_p = head;
    let flag = 0;
     
    while (slow_p != null && fast_p != null && 
           fast_p.next != null)
    {
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
        if (slow_p == fast_p)
        {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        console.log("Loop Found");
    else
        console.log("No Loop");
}
 
detectLoop2();