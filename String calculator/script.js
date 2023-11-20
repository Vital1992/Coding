// Given a string representing an arithmetic expression with only addition and multiplication operators, return the result of the calculation. For example, 
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