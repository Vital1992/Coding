class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class List {
  constructor(head = null) {
    this.head = head
  }
}

let node1 = new Node(0)
let node2 = new Node(4)
let node3 = new Node(1)

let list = new List(node1)

function add(val){
  const newNode = new Node(val)
  let curNode = list.head
  while (curNode.next) {
    curNode = curNode.next
  }
  curNode.next = newNode
}

function insertAt(idx, val) {
  const newNode = new Node(val)
  let curNode = list.head
  let i = 0
  while (curNode.next && i !== idx) {
    curNode = curNode.next
    i++
  }
  if (i === idx) {
    let temp = curNode.next
    newNode.next = temp
    curNode.next = newNode
  }
}

function removeAt(idx) {
  let curNode = list.head
  let i = 0
  while (curNode.next && i !== idx - 1) {
    curNode = curNode.next
    i++
  }
  if (i === idx - 1) {
    let temp = curNode.next.next
    // newNode.next = temp
    curNode.next = temp
  }
}

function getAt(idx) {
  let curNode = list.head
  let i = 0
  let toReturn
  while (curNode.next && i !== idx) {
    curNode = curNode.next
    i++
  }
  if (i === idx) {
    toReturn = curNode.data
  }
  return toReturn
}

function reverse() {
  let prevNode = null;
  let currentNode = list.head;
  if(currentNode===null) return;

  let nextNode;
  while(currentNode){
      nextNode = currentNode.next;
      // "data": 1,
      // "next":

      currentNode.next = prevNode;
      // null

      prevNode = currentNode;
      console.log(prevNode)
      // "data": 0,
      // "next":

      currentNode = nextNode;
      // "data": 1,
      // "next":
  }
  list.head = prevNode;
}

add(1)
add(2)
add(3)
add(5)
insertAt(2, 4) // {
//   "data": 0,
//   "next": {
//       "data": 1,
//       "next": {
//           "data": 2,
//           "next": {
//               "data": 4,
//               "next": {
//                   "data": 3,
//                   "next": {
//                       "data": 5,
//                       "next": null
//                   }
//               }
//           }
//       }
//   }
// }
removeAt(2) //{
//   "data": 0,
//   "next": {
//       "data": 1,
//       "next": {
//           "data": 4,
//           "next": {
//               "data": 3,
//               "next": {
//                   "data": 5,
//                   "next": null
//               }
//           }
//       }
//   }
// }
removeAt(3) //{
//   "head": {
//       "data": 0,
//       "next": {
//           "data": 1,
//           "next": {
//               "data": 4,
//               "next": {
//                   "data": 5,
//                   "next": null
//               }
//           }
//       }
//   }
// }

console.log(getAt(2)) // 4

reverse()

console.log(list) // List { head: Node { data: 5, next: Node { data: 4, next: [Node] } } }


// JavaScript program to implement Priority Queue
// using Arrays
 
// Structure for the elements in the
// priority queue
class item {
  constructor()
  {
      this.value;
      this.priority;
  }
};

// Store the element of a priority queue
let pr = [];
for (var i = 0; i < 100000; i++)
  pr.push(new item());

// Pointer to the last index
let size = -1;

// Function to insert a new element
// into priority queue
function enqueue(value, priority)
{
  // Increase the size
  size++;

  // Insert the element
  pr[size] = new item();
  pr[size].value = value;
  pr[size].priority = priority;
}

// Function to check the top element
function peek()
{
  let highestPriority = Number.MIN_SAFE_INTEGER;
  let ind = -1;

  // Check for the element with
  // highest priority
  for (var i = 0; i <= size; i++) {

      // If priority is same choose
      // the element with the
      // highest value
      if (highestPriority == pr[i].priority && ind > -1
          && pr[ind].value < pr[i].value) {
          highestPriority = pr[i].priority;
          ind = i;
      }
      else if (highestPriority < pr[i].priority) {
          highestPriority = pr[i].priority;
          ind = i;
      }
  }

  // Return position of the element
  return ind;
}

// Function to remove the element with
// the highest priority
function dequeue()
{
  // Find the position of the element
  // with highest priority
  let ind = peek();

  // Shift the element one index before
  // from the position of the element
  // with highest priority is found
  for (var i = ind; i < size; i++) {
      pr[i] = pr[i + 1];
  }

  // Decrease the size of the
  // priority queue by one
  size--;
}

// Function Call to insert elements
// as per the priority
enqueue(10, 2);
enqueue(14, 4);
enqueue(16, 4);
enqueue(12, 3);

// Stores the top element
// at the moment
let ind = peek();

console.log('peek:');
console.log(pr[ind].value);

console.log(pr);
// item { value: 10, priority: 2 },
// item { value: 14, priority: 4 },
// item { value: 16, priority: 4 },
// item { value: 12, priority: 3 },

// Dequeue the top element
dequeue();

console.log(pr);
// item { value: 10, priority: 2 },
// item { value: 14, priority: 4 },
// item { value: 12, priority: 3 },
// item { value: 12, priority: 3 },

// Check the top element
ind = peek();
console.log(pr[ind].value);

// Dequeue the top element
dequeue();

// Check the top element
ind = peek();
console.log(pr[ind].value);