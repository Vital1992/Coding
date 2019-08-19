var a ="a";
if (/[0-9]/.test(a) || /[.,?:";{}']/.test(a)){//The test() method tests for a match in a string.
//This method returns true if it finds a match, otherwise it returns false.
  console.log("Here's a number or sp. char!")
}else{
  console.log("Here's a character!")
}
