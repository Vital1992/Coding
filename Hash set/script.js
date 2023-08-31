// The Set object lets you store unique values of any data type, whether primitive values or object references.

// Time O(n) 

const mySet = new Set();

// Adding elements to the Set:

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add('hello');
mySet.add({ key: 'value' });

console.log(mySet); // {1, 2, 3, 'hello', {key: 'value'}}

// Checking if an element exists in the Set:

const hasValue = mySet.has(2); // true
console.log(hasValue);

// Removing an element from the Set:

mySet.delete(2);

// Clearing all elements from the Set:

mySet.clear();

// Getting the size of the Set:

const setSize = mySet.size;
console.log(setSize); // 0

// Iterating over the Set:
// Using for.of loop
for (const value of mySet) {
  console.log(value);
}

// Using forEach
mySet.forEach((value) => {
  console.log(value);
});
