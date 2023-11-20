
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