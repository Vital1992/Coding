// Time:
// push - O(logn)
// pull - O(logn)

// class Heap {
//   constructor() {
//     this.data = [];
//   }

//   getParentIndex(i) {
//     return Math.floor((i - 1) / 2);
//   }

//   getLeftChildIndex(i) {
//     return i * 2 + 1;
//   }

//   getRightChildIndex(i) {
//     return i * 2 + 2;
//   }

//   swap (i1, i2) {
//     const temp = this.data[i1];
//     this.data[i1] = this.data[i2];
//     this.data[i2] = temp;
//   }

//   push(key) {
//     this.data[this.data.length] = key;
//     this.heapifyUp();
//   }

//   heapifyUp() {
//     let currentIndex = this.data.length - 1;

//     while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
//       this.swap(currentIndex, this.getParentIndex(currentIndex));

//       currentIndex = this.getParentIndex(currentIndex);
//     }
//   }

//   pull() {
//     const maxValue = this.data[0];
//     this.data[0] = this.data[this.data.length -1];
//     this.data.length--;
//     this.heapifyDown();

//     return maxValue
//   }

//   heapifyDown() {
//     let currentIndex = 0;

//     while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined){
//       let biggestChildIndex = this.getLeftChildIndex(currentIndex);

//       if (this.data[this.getRightChildIndex(currentIndex)] !== undefined
//           && this.data[this.getRightChildIndex(currentIndex)]
//           > this.data[this.getLeftChildIndex(currentIndex)]) {
//             biggestChildIndex = this.getRightChildIndex(currentIndex);
//         }

//       if (this.data[currentIndex] < this.data[biggestChildIndex]) {
//         this.swap(currentIndex, biggestChildIndex);
//         currentIndex = biggestChildIndex;
//       } else {
//         return;
//       }
//     }
//   }
// }

// const heap = new Heap();

// heap.push(25);
// heap.push(50);
// heap.push(40);
// heap.push(70);
// heap.push(90);
// heap.push(44);

// console.log(heap.data.join(',')); // 90,70,44,5,40,25

// let a = [];
// a.push(heap.pull());
// a.push(heap.pull());
// a.push(heap.pull());
// // a.push(heap.pull());
// // a.push(heap.pull());

// console.log('Top 5 items:', a); // Top 5 items: (5) [90, 70, 44, 40, 25]
// console.log(heap.data.join(',')); // 5

// -----------------------------------------------------------------

// Heap sort

function heapify(arr, length, parentIndex) {
  let largest = parentIndex;
  let left = parentIndex * 2 + 1;
  let right = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== parentIndex) {
    [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];

    heapify(arr, length, largest)
  }
  return arr;
}

function heapSort(arr) {
  let length = arr.length;
  let lastParentNode = Math.floor(length / 2 - 1);
  let lastChild = length - 1;

  while (lastParentNode >= 0) {
    heapify(arr, length, lastParentNode);
    lastParentNode--;
  }

  while (lastChild >= 0) {
    [arr[0], arr[lastChild]] = [arr[lastChild], arr[0]];
    heapify(arr, lastChild, 0);
    lastChild--;
  }
  return  arr;
}

console.log(heapSort([2,8,5,4,9,1,7,3]))

//        2
//      /   \
//     8     5
//    / \   / \
//   4   9 1   7
//  /
// 3