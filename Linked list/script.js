// A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in 
// a particular memory location or index. Rather each element is a separate object that contains a pointer or 
// a link to the next object in that list.

// Each element (commonly called nodes) contains two items: the data stored and a link to the next node. 
// The data can be any valid data type.

// An advantage of Linked Lists

// Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. 
// This is one advantage it has over arrays.

// Disadvantages of Linked Lists

// Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. 
// Nodes are accessed sequentially starting from the first node.
// It uses more memory than arrays because of the storage of the pointers.

// Time: Access, Search: O(N)
// Insert, Delete: O(1)

// Overview:
const linkedList = {
    head: {
        value: 6,
        next: {
            value: 10,                                           
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null	
                    }
                }
            }
        }
    };

// As stated earlier, a list node contains two items: the data and the pointer to the next node. 
// We can implement a list node in JavaScript as follows:

class ListNode {
	constructor(data) {
		this.data = data
		this.next = null                
	}
}

// The code below shows the implementation of a linked list class with a constructor. 
// Notice that if the head node is not passed, the head is initialised to null.

class LinkedList {
	constructor(head = null) {
		this.head = head
	}

	size() {
		let count = 0; 
		let node = this.head;
		while (node) {
			count++;
			node = node.next
		}
		return count;
	}

	clear() {
		this.head = null;
	}

	getLast() {
		let lastNode = this.head;
		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next
			}
		}
		return lastNode
	}

	getFirst() {
		return this.head;
	}

	search(val) {
		let current = this.head;
		while (current) {
			if (current.data === val) {
            return current.data;
			}
			current = current.next;
        }
	}

	reverseList() {
		if (this.head === null) {
			return this.head;
		}
		
		let current = this.head;
		let previous = null;
		
		while (current !== null) {
			let temp = current.next;
			current.next = previous;
			previous = current;
			current = temp;
		}
		return this.head = previous;
	};
}

// Let's create a linked list with the class we just created. 
// First, we create two list nodes, node1 and node2 and a pointer from node 1 to node 2.

let node1 = new ListNode(2)
let node2 = new ListNode(6)
let node3 = new ListNode(5)
let node4 = new ListNode(6)
let node5 = new ListNode(12)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

// Next, we'll create a Linked list with the node1.

let list = new LinkedList(node1)

// Let's try to access the nodes in the list we just created.

console.log(list.head.data) // returns 2
console.log(list.head.next.data) // returns 6

console.log(list)

// {
//     "head": {
//         "data": 2,
//         "next": {
//             "data": 6,
//             "next": {
//                 "data": 5,
//                 "next": {
//                     "data": 6,
//                     "next": {
//                         "data": 12,
//                         "next": null
//                     }
//                 }
//             }
//         }
//     }
// }

console.log(list.size()) // returns 5
console.log(list.getLast()) // {data: 12, next: null}
console.log(list.getFirst()) // {data: 2, next: ListNode}
console.log(list.search(5)) // 5

list.reverseList()
// {
//     "head": {
//         "data": 12,
//         "next": {
//             "data": 6,
//             "next": {
//                 "data": 5,
//                 "next": {
//                     "data": 6,
//                     "next": {
//                         "data": 2,
//                         "next": null
//                     }
//                 }
//             }
//         }
//     }
// }