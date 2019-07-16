var a ="a2";
if (/[0-9]/.test(a) || /[.,?:";{}']/.test(a)){
  console.log("Here's a number or sp. char!")
}else{
  console.log("Here's a character!")
}
