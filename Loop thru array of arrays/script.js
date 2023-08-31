//How to iterate all arrays?

var parentArray1 = [
 [[1,2,3],[4,5,6],[7,8,9]],
 [[10,11,12],[13,14,15],[16,17,18]],
 [[19,20,21],[22,23,24],[26,27,28]]
];

var parentArray = [ [ { trip_instance_id: 51911,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 15,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 },
    { trip_instance_id: 51913,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 10,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 },
    { trip_instance_id: 51915,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 20,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 },
    { trip_instance_id: 51917,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 15,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 } ],
  [ { trip_instance_id: 52811,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 15,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 },
    { trip_instance_id: 52813,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 10,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 },
    { trip_instance_id: 52817,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 15,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 },
    { trip_instance_id: 52815,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 20,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 } ],
  [ { trip_instance_id: 53792,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 15,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 },
    { trip_instance_id: 53794,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 10,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 },
    { trip_instance_id: 53796,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 20,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 },
    { trip_instance_id: 53798,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 15,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 },
    { trip_instance_id: 53800,
      distance: [Object],
      agency: [Object],
      vehicle: [Object],
      fare: [Object],
      available_seats: 10,
      steps: [Array],
      summary: '',
      cancellation_cutoff_delta: 60 } ] ];


var final = []; // final array with all values from all internal arrays
//For 2 dimenional Arrays:
/*
for(var i = 0; i < parentArray.length; i++){
    for(var j = 0; j < parentArray[i].length; j++){

        console.log(parentArray[i][j]);
    }
}
*/
//For arrays with an unknown number of dimensions you have to use recursion:
function printArray(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] instanceof Array){
            printArray(arr[i]);
        }else{
            final.push(arr[i]); //to put all values of all arrays into one array
            //console.log(arr[i]);
            //console.log(final);
        }
    }
}
printArray(parentArray1);
console.log(final);
