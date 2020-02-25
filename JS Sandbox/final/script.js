/*
//Watch app
(function time(){
  Date.prototype.customFormat = function(formatString){
  var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
  YY = ((YYYY=this.getFullYear())+"").slice(-2);
  MM = (M=this.getMonth()+1)<10?('0'+M):M;
  MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
  DD = (D=this.getDate())<10?('0'+D):D;
  DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3);
  th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
  formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
  h=(hhh=this.getHours());
  if (h==0) h=24;
  if (h>12) h-=12;
  hh = h<10?('0'+h):h;
  hhhh = hhh<10?('0'+hhh):hhh;
  AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
  mm=(m=this.getMinutes())<10?('0'+m):m;
  ss=(s=this.getSeconds())<10?('0'+s):s;
  return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
};
now = new Date();
console.log( now.customFormat( "#DD#/#MM#/#YYYY# #hh#:#mm#:#ss#" ) );
setTimeout(time,1000);
})();
*/

/*
//Promise
var promise = new Promise(function(resolve, reject) {
  resolve(1);
});
promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
})
*/

/*
//Promise with wait
function wait(time){
  return new Promise(function(resolv){
    return setTimeout(resolv, time)
  })
};

wait(3000).then(function() {console.log('Hello!')})
*/

/*
//Convert Date to another format
now = new Date()
console.log(now.toISOString());// Converts to  2019-07-09T22:44:07.798Z format
*/

/*
//Random number with specified length
var b = Math.random().toFixed(32).split('.')[1]; //random 32 in length
console.log(b);
*/
/*
//Bubble sort-------------------------------------------------------------------
//Bubble Sort sorts by comparing an item to the one next to it, and if it’s larger, swap places, if not, go to the next item.
const unsortedArray = [];
for (var i = 0; i<=20; i++){
  unsortedArray.push(Math.floor(Math.random()*100));
}
const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray);

function bubbleSort(array) {
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                bubbleSort(array)
            }
        }
    return array;
}

function binarySearch(myList, itemToFind) {
	var low = 0,
        high = myList.length - 1,
        mid,
        guessed;

	while(low <= high) {
	    mid = Math.floor((low + high) / 2),
	    guessed = myList[mid];

	    if(guessed === itemToFind) {
                console.log('Found item at index: ' + mid + ', value is ' + guessed);
		    return;
	    }
	    if(itemToFind < guessed) {
	        high = mid - 1;
            } else {
	        low = mid + 1;
	    }
        }

	//return null;
  console.log('Item not found')
}

binarySearch(sortedArray, 3);
*/

var array = [ [ { trip_instance_id: 51911,
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

var array2 = [ [ { trip_instance_id: 51911,
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
      cancellation_cutoff_delta: 60 } ] ];

var allTrips = [];
function loopAgencies(arr){
    for(var i = 0; i < arr.length; i++){
      if(arr[i] instanceof Array){
        loopAgencies(arr[i]);
      }else{
        allTrips.push(arr[i]); //putting trips objects
      }
    }
    return allTrips
  }

  function clearArr(){
    allTrips = [];
  }

  const main = (arr)=>{
    return [loopAgencies(arr), clearArr()]
  }

  console.log(main(array)[0]);
  console.log(main(array2)[0]);

//------------------------------------------------------------------------------
//How to replace words in the sentence

var ingredients = ['1/2 Tablespoon Of Sugar','2 Cups Of Sour Cream','1/2 ounces of flour']

var replaceWord = function(){
  const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
  const unitShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];

  const newIngredients = ingredients.map(el=>{
    let ingredient = el.toLowerCase();
    unitsLong.forEach((unit, i)=>{//loop thru unitsLong array
      ingredient = ingredient.replace(unit, unitShort[i]);//if any value from 'unitsLong' found in 'ingredient' array, it's replaced to values from 'unitShort'
    });
    return ingredient
  });
console.log(newIngredients)
}
replaceWord();
//------------------------------------------------------------------------------

//Count number is array until limit
var numbers = [175, 50, 25];
var newTitle = [];
var app = function(){
  numbers.reduce((acc, cur) => {
    if (acc + cur <= 240){
      newTitle.push(cur);
    }
    return acc+cur
  },0)
}
app();
console.log(newTitle)
//------------------------------------------------------------------------------

//Count the time difference and make a condition out of it
var currentTime = new Date().toISOString(); //get current time
        var currentTimeConverted = new Date(currentTime); //convert current time to Math readible format
        var tripTimeConverted = new Date('2019-11-21T00:30:31.437Z'); //convert trip time to Math readible format
        var res = (currentTimeConverted - tripTimeConverted)/1000; //get time difference
        var hours = Math.floor(res / 3600); // get hours
        var minutes = Math.floor(res / 60) % 60; // get minutes
console.log(currentTime)
console.log(currentTimeConverted)
console.log(tripTimeConverted)
console.log(hours)
console.log(minutes)
if ((hours>0 && hours<=48)||(hours==0 && minutes>15)){
  console.log(`Current time difference between current time and last purchased ticket
               is ${hours} hour/s and ${minutes} minute/s`);
}
//------------------------------------------------------------------------------
//Return true or false if id matches
var likes = [{id:213}]
function isLiked(id){
    return likes.findIndex(el => el.id === id) !== -1;
  }
console.log(isLiked(213))

//------------------------------------------------------------------------------
//Local storage
localStorage.setItem('id','123')
console.log(localStorage.getItem('id'))
localStorage.removeItem('id')
//------------------------------------------------------------------------------
//Convert long decimal
var count = 0.2222222222
const newCount = Math.round(count*1000)/1000;
console.log(newCount)

//Comparing arrays--------------------------------------------------------------
const a = [1, 2, 3, 5];
const b = [1, 2, 3, 5];
// comparing both arrays using stringify
if(JSON.stringify(a)==JSON.stringify(b))
 document.write("True");
else
 document.write("False");
 document.write('<br>');
const f=[1, 2, 4, 5];
if(JSON.stringify(a)==JSON.stringify(f))
 document.write("True");
else
 document.write("False");

//Modifying array with objects--------------------------------------------------
 var person = [
   {
  firstName:"John",
  lastName:"Doe",
  age:50,
  eyeColor:"blue"
},
{
firstName:"Jack",
lastName:"Grey",
age:40,
eyeColor:"brown"
}
]
;
var temp = person
console.log(temp) //height attribute already will be added and eyeColor deleted
//person.forEach(cur => delete cur.age)
for (var i=0; i<person.length; i++){
  person[i].height = 1;
  delete person[i].eyeColor;
}
console.log(person)


//Compare two arrays:
//const intersection = arrayA.filter(element => !arrayB.includes(element.item));// find the item that not present in the arrayB array

//Coercion
var c = String(1); //or Number(1);
var d = String(2);
console.log(c+d);//result will be 12, because Number() prevents implicit coercion
