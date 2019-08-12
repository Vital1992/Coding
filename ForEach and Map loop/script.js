
var fieldsArr = [
  Expenses={
    id:1,
    description:'spent',
    value:123
  },
  Expenses={
    id:2,
    description:'spent2',
    value:124
  }
];
          // Using forEach loop. 1) Current (is the value of the array that is being processed)
          //will go thru inputDescription and inputValue.
          // 2) Index is the index number, will go from 0 to the length of the array minus one
          // 3) Array is the entire array 'fieldsArr'
/*
          fieldsArr.forEach(function(current, index, array){
            console.log(current.value);
          });
          */
/*
var Arr = [1,2,3,4,5];          // Using forEach loop. 1) Current (is the value of the array that is being processed)
          //will go thru inputDescription and inputValue.
          // 2) Index is the index number, will go from 0 to the length of the array minus one
          // 3) Array is the entire array 'fieldsArr'
          Arr.forEach(function(current, index, array){
            console.log(current, index, array);
          });
*/

/*
// Map loop
fieldsArr.map(function(current, index, array){
  console.log(current.id);
});
*/
// Find the index if id by passed id number
var id = 2;
var ids = fieldsArr.map(function(current){
  return current.id;
});
console.log(ids);
var index = ids.indexOf(id);
console.log(index);
