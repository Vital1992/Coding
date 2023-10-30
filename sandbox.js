
// The following class represents an 8-character magnetic tape barcode value.
// Please implement the "next()" method shown below.

// public class Barcode {
//   private String barcode;
 
//   /**
//    * Constructor – assumes well-formatted value
//    */
//   public Barcode(String value ) {
//      this.barcode = value;
//   }
 
//   /**
//    * @return Barcode The next decimally sequential barcode following this barcode.
//    * Returns null if the current barcode cannot be incremented.
//    */
//   public Barcode next(){
//     // to be completed by you
//     return null;
//   }
// }
 
// Implement Barcode.next() where:
// - A barcode is always 8 characters in length.
// - All characters will be A-Z,0-9
// - The last two characters (index 6 and 7) should be retained as is.
// - Only a contiguous decimal value starting at index 5 (and going left) should be incremented.
// - The method should return null if there is not a valid next barcode.


// A01235BC -> A01236BC
// A01249BC -> A01250BC
// 123C13HA -> 123C14HA
// 543543VD -> 543544VD

let barcode = "A021235BC"

function increment(barcode){
    const arr =  barcode.split('')
    let integers = new Map() //{0 :[1], 1 :[2], 2 :[3],}
    
    for (let i = 0; i < arr.length; i++){
        if (parseInt(arr[i]) !== NaN){
            let subArr = []
            subArr.push(parseInt(arr[i]))
            integers.set(i, subArr)
        }
    }
    let startIdx = -1
    let endIdx = -1
    let resArr = []
    let isZero = false
    
    for (int of integers){

        if (!isNaN(int[1][0]) && startIdx === -1) {
            startIdx = int[0]
        }
        if (!isNaN(int[1][0])){
            endIdx = int[0]
            resArr.push(int[1][0])
        }
    }

    let finalStrNum = resArr.reduce((a, b) => {
        return `${a}${b}`
    })
    isZero = finalStrNum[0] === '0'

    let finalNum = parseInt(finalStrNum) + 1

    let formatted = `${isZero ? `0${finalNum}` : finalNum}`
    
    let result = arr.slice(0, startIdx).concat(formatted).concat(arr.slice(endIdx + 1, arr.length))
    
    let toreturn = result.reduce((a, b) => {
        return `${a}${b}`
    })
    return toreturn
}
console.log(increment(barcode))




// Your previous Plain Text content is preserved below:

// Welcome to Meta!

// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you would like to use for your interview,
// simply choose it from the dropdown in the left bar.

// Enjoy your interview!


// Given a list of city names and their corresponding populations, write a function to output a random city name subject to the following constraint: the probability of the function to output a city's name is based on its population divided by the sum of all cities' population. Assume the function will be repeatedly called infinitely many times.

// For example:

// NY: 7MM
// SF: 5MM
// LA: 8MM
// The probability to generate NY is 7/20, SF is 5/4. LA 8/20

// 1 - 7: NY 
// 8 - 12: SF
// 13 - 20: LA

//------------
// Another explanation of the same problem:
// If you're given a list of countries and its corresponding population, write a function
// that will return a random country but the higher the population of the country, the 
// more likely it is to be picked at random.

// string getRandomCountry(vector<pair<string,long>> populationperCountry);

// e.g. ({USA,300m},{Russia,150m},{India,2B},{Spain,3B})

// P(USA) = 2P(Russia)

// P(India) = x*P(USA) where x= population of India/population of USA


function update(arr) {
    arr[0][1] += 1;
    for (let i = 1; i < arr.length; i++) {
      arr[i][1] = arr[i - 1][1] + arr[i][1];
    }
    return arr;
  }
  
  function helper(arr, val) {
    for (let i = 1; i < arr.length; i++) {
      const prev = arr[i - 1][1];
      const cur = arr[i][1];
      if (val >= prev && val < cur) {
        return arr[i][0];
      }
    }
    return arr[0][0];
  }
  
  function getChoice(arr, total) {
    const x = Math.floor(Math.random() * total);
    return helper(arr, x);
  }
  
  const arr = [
    ["USA", 30],
    ["Russia", 15],
    ["India", 200],
    ["Spain", 300],
  ];
  
  arr.sort((a, b) => b[1] - a[1]);
  const total = arr.reduce((acc, city) => acc + city[1], 0);
  update(arr);
  const choice = getChoice(arr, total);
  
  console.log("Random Choice:", choice);

// ================

// # Given a string representing an arithmetic expression with only addition and multiplication operators, return the result of the calculation. For example, 
// for "2*3+4", return 10

// "5*20+7 + 3 * 2", 107

// "5*20+7", 107
// "10 + 6", 16
// "2 * 6", 12

function calculate(input){
  let numsArr = input.split('*').join(',').split('+').join(',').split(',')
  let operations = []
  let arr = input.split('')

  numsArr = numsArr.map((cur) => {return parseInt(cur)})

  for (i = 0; i < arr.length; i++){
    if(isNaN(parseInt(arr[i]))){
      operations.push(arr[i])
    }
  }
  let incrementor = 1
  for (i = 0; i < operations.length; i++){
    numsArr.splice(incrementor, 0, operations[i])
    incrementor = incrementor + 2
  }

  let res = numsArr.join('')

  return eval(res)
}

let input = "7+5*20"
console.log(calculate(input))

//------------------------------------

// Look-and-Say Sequence

// Find the n’th term in Look-and-say (Or Count and Say) Sequence. The look-and-say sequence is the sequence of the below integers: 
// 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, … 

// How is the above sequence generated? 
// n’th term is generated by reading (n-1)’th term.

// The first term is "1"
// Second term is "11", generated by reading first term as "One 1" 
// (There is one 1 in previous term)
// Third term is "21", generated by reading second term as "Two 1"
// Fourth term is "1211", generated by reading third term as "One 2 One 1" 
// and so on

function look(arr) {
    if (arr.length === 0) {
        return []
    }
    // loop thru one number, when done write count and number
    let resArr = []
    let distNum = arr[0]
    let count = 1

    for (let i = 1; i < arr.length; i++){
        if (distNum === arr[i]) {
            count++
        }
        if (distNum !== arr[i]) {
            resArr.push(count, distNum)
            distNum = arr[i]
            count = 1
        }
        if (i === arr.length - 1){
            resArr.push(count, distNum)
        }
    }
    return resArr
}

function lookAndSay(n){
    let resArr = [1]
    for (let i = 0; i < n - 2; i++){
        if (i < 1) {
            resArr.push(1)
        }
        resArr = look(resArr)
    }
    return resArr
}

console.log(lookAndSay(8))

//-----------------------------------------------------

// Edit Distance

// Write a function that returns whether two words are exactly "one edit" away using the following signature:
// bool OneEditApart(string s1, string s2);
// An edit is:
// Inserting one character anywhere in the word (including at the beginning and end)
// Removing one character
// Replacing one character
// Examples:
// OneEditApart("cat", "dog") = false
// OneEditApart("cat", "cats") = true
// OneEditApart("cat", "cut") = true
// OneEditApart("cat", "cast") = true
// OneEditApart("cat", "at") = true
// OneEditApart("cat", "act") = false

function oneEditApart () {
    let count = 0
    function findEdits () {
        //[ 'c', 'a', 's', 't' ]
        // [ 'c', 'a', 'r' ]

        // [ 'c', 'a', 't' ]
        // [ 'c', 'a', 'r' ]
        console.log(longestStr)
        console.log(shortestStr)
        for (let i = 0; i < longestStr.length; i++){
            if (longestStr[i] !== shortestStr[i] && longestStr.length === shortestStr.length){
                count ++
                continue
            }
            if (longestStr[i] !== shortestStr[i]){
                count ++
                findEdits(longestStr.splice(i, 1), shortestStr)
            }
        }
        return count
    }

    let str1 = "car"
    let str2 = "cast"
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    let longestStr = arr1.length > arr2.length ? arr1 : arr2
    let shortestStr = arr1.length > arr2.length ? arr2 : arr1
    let edits = findEdits()
    return edits <=1 ? true : false
}
console.log(oneEditApart()) //false
