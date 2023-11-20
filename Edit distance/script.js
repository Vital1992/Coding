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