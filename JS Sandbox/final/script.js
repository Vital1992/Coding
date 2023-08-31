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
// localStorage.setItem('id','123')
// console.log(localStorage.getItem('id'))
// localStorage.removeItem('id')
//------------------------------------------------------------------------------
//Convert long decimal
var count = 0.2222222222
const newCount = Math.round(count*1000)/1000;
console.log(newCount)

//Comparing arrays--------------------------------------------------------------
// const a = [1, 2, 3, 5];
// const b = [1, 2, 3, 5];
// comparing both arrays using stringify
// if(JSON.stringify(a)==JSON.stringify(b))
//  document.write("True");
// else
//  document.write("False");
//  document.write('<br>');
// const f=[1, 2, 4, 5];
// if(JSON.stringify(a)==JSON.stringify(f))
//  document.write("True");
// else
//  document.write("False");

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
let arrayA = [123,333,321,456]
let arrayB = [123,222,321,456]
const intersection = arrayA.filter(element => !arrayB.includes(element));// find the item that not present in the arrayB array
console.log(intersection)
//Coercion
var c = String(1); //or Number(1);
var d = String(2);
console.log(c+d);//result will be 12, because Number() prevents implicit coercion

//Lexicographical Maximum substring of string
/*
Given a string s we have to find the lexicographical maximum substring of a string
Examples:
Input : s = "ababaa"
Output : babaa
Explanation : "babaa" is the maximum lexicographic susbtring formed from this string

Input : s = "asdfaa"
Output : sdfaa
*/
let str = "banana"
const fun = str => {
  let mx = ""
for (let i = 0; i < str.length; ++i) {
  //console.log(str.substring(i))
  if (mx.localeCompare(str.substring(i)) <= 0) {
    mx = str.substring(i);
  }
}
return mx
}
console.log(fun(str))
/*
The localeCompare() method compares two strings in the current locale.
A Number, indicating whether the reference string comes before, after or is the
same as the compareString in sort order. Returns one of three values:
-1 if the reference string is sorted before the compareString
0 if the two strings are equal
1 if the reference string is sorted after the compareString
*/
//Sort dates
var dates =  ["23 Jun 2018", "2 Dec 2017", "11 Jun 2018", "01 Jan 2019", "10 Jul 2016", "01 Jan 2007"];
console.log(dates.sort((a, b) =>(new Date(a) > new Date(b)) ? 1 : -1))

//FizzBuzz
/*
Write a program that prints the numbers from 1 to 100. But for multiples
of three print “Fizz” instead of the number and for the multiples of five
print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
*/
/*
for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
*/

//Autoscale

function autoScale(ins, avg){
    var ans = ins;
    var i = 0;

    while (i < avg.length){
        if (avg[i] < 25 && ans > 1){
          //console.log(avg[i])
            ans = ans / 2; //ans = Math.floor((ans + 1) / 2);
            i += 10;
          } else if (avg[i] > 60 && ans <= 2e8){
            //console.log(avg[i])
            ans = ans * 2;
            i += 10;
          }
          i += 1;
        }
    return ans
  }

console.log(autoScale(1, [5, 10, 80]))
console.log(autoScale(2, [25,23,1,2,3,4,5,6,7,8,90,10,76,80]))

//Sort grades

var input = ["D-","B+","C","A+","F","C+","C-","B","B-","H+","X","Z-","Z+","B@","C*","A!"];
var loop = function(unsorted){
  unsorted.forEach((cur,i) => {
  var char = cur.split("")[0].toLowerCase() //split is not necessary, strings already can be treated as arrays

  if (cur.split("")[1]){
    var sign = cur.split("")[1]
  }else{var sign=""}

  //if ((char !== "a" && char !== "b" && char !== "c" && char !== "d" && char !== "f") || (sign !== "-" && sign !== "+" && sign !== "")){
  if ((!/[a-cf]/.test(char)) || (sign !== "-" && sign !== "+" && sign !== "")){
      unsorted.splice(i,1);
      loop(unsorted)
  }
  })
}
var sort_grades = function(unsorted){
  loop(unsorted)
    unsorted.sort((a, b) => {
 const order = {"+":-1, "-":1, undefined:0};
 return a[0].localeCompare(b[0]) || order[a[1]] - order[b[1]]; //a[0].localeCompare(b[0]) will return 1, -1 or 0,]
 //if 0 returned, order[a[1]] - order[b[1]] executed since 0 is falsy value
})
return unsorted
};

console.log(sort_grades(input))

//arr.shift()
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1


// You are given 2 strings: amazon, amaze. Find the common alphabets in two strings and print it.
// i/p: amazon, amaze
// o/p: amaz

let ip = ['amazon', 'amaze']
if (ip[0].length < ip[1].length){
  ip.reverse()
}
let result = [];
for (let i = 0; i < ip[0].length; ++i) {
  if (ip[0][i] == ip[1][i]){
    result.push(ip[0][i])
  }
}
result = result.join("")
console.log(result)

/*
Your task is to find the sum of two fractions, expressed in the form X/Y and U/V, where X, Y, U, and V are four integers. Compute their sum and reduce it to its lowest indivisible state: A/B.

For example:

2/6+2/6 equals 4/6, which should be reduced to 2/3.
7/10+13/10 equals 20/10 which should be reduced to 2/1.
You are given an array of strings, which contains several expressions in the form "X/Y+U/V". Return a string array, where the ithe element is the result for the ith expression in the form "A/B".

Example

For fractions = ["2/6+2/6", "7/10+13/10"], the output should be
addingFractions(fractions) = ["2/3", "2/1"].

Input/Output

[execution time limit] 4 seconds (py3)

[input] array.string fractions

An array of strings, where each string contains an expression that represents the sum of two fractions, given in the form "X/Y+U/V".

Guaranteed constraints:
1 ≤ fractions.length ≤ 500,
fractions[i] has the form "X/Y+U/V" where X, Y, U, V are integers,
 1 ≤ X, Y, U, V ≤ 2000.

[output] array.string

An array of strings, where the ith element is the result for the ith expression in the form "A/B".
*/

// import re
// def gcd(a, b):
// 	if (a == 0):
// 		return b
// 	return gcd(b % a, a)
//
// def sumFraction(num1, den1, num2, den2):
//
// 	den3 = gcd(den1, den2)
// 	den3 = (den1 * den2) / den3
// 	num3 = ((num1) * (den3 / den1) +
//             (num2) * (den3 / den2))
// 	divider = gcd(num3, den3)
// 	den3 = int(den3 / divider)
// 	num3 = int(num3 / divider)
// 	return str(num3) + "/" + str(den3)
//
// fractions = ["2/6+2/6", "7/10+13/10"]
//
// def addingFractions(fractions):
// 	ans = []
// 	for fraction in fractions:
// 		res = re.search("(\d+)\/(\d+)\+(\d+)\/(\d+)", fraction)
// 		ans.append(sumFraction(int(res.group(1)), int(res.group(2)), int(res.group(3)), int(res.group(4))))
// 	return ans
//
//
// print (addingFractions(fractions))

/*
SELECT distinct
(departments.dep_name)
FROM
   departments
   LEFT OUTER JOIN
      employees
      ON departments.id = employees.department
WHERE
   employees.id IS NULL;
   You've just started working for a large and successful company, and it's come as a shock to find that the records about the company's internal organization haven't been updated for ages. Some employees have changed their departments and some have resigned, and consequently, there are some departments that have no employees in them. You want to identify these departments.

Information about employees and departments is stored in two tables, employees and departments, which have the following structure:

employees:
id: the unique employee ID;
full_name: the employee's full name;
department: a foreign key referencing departments.id;
departments:
id: the unique department ID;
dep_name: the department name.
Given the tables employees and departments, write a select statement which returns only one column, dep_name, which contains all the departments in which there are no employees, sorted by id.

Example

For the following tables departments

id	dep_name
1	IT
2	HR
3	Sales
4	Warehousing
and employees

id	full_name	department
1	James Miller	1
2	Joseph Harvey	1
3	Anna Lawson	2
4	Arthur Saunders	3
the output should be

dep_name
Warehousing
*/
