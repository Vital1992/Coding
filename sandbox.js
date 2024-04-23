// You have an array of strings representing people's full names. However, the names are inconsistently capitalized. For example, "Efrain Montt" appears as
// "efrain mOntt". Additionally, many of the strings contain unnecessary whitespace. You need to regularize these names so that each name begins with a capital letter. You should also remove leading and trailing whitespace, and ensure that names are separated only by single spaces.
// Finally, convert the resulting array into a string where commas separate the elements. Duplicate names should not appear in the final result. If the input array is empty, return an empty string.
// Examples
// fixNames([" mr \trogers", "Tim smith"]) === 'Mr Rogers, Tim Smith'

function fixNames(names) {
    // Helper function to capitalize each part of the name
    function capitalizeName(name) {
        return name.split(' ').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ');
    }

    // Trim, capitalize, and remove duplicates using a Set
    let fixedNames = new Set(names.map(name => capitalizeName(name.trim())));
console.log(names.map(name => capitalizeName(name.trim())))
console.log(fixedNames)
//     // Convert the Set back to a string, joined by commas
    return Array.from(fixedNames).join(', ');
}

// Example usage
let exampleInput = [" mr \trogers", "Tim smith", "tim Smith"];
console.log(fixNames(exampleInput));
console.log(" mr \trogers".trim().split(' '))

// Given a list of website names, we want to find out the name which occurs most number of times in the list. If multiple names occur the same number of times then the website which comes first in the alphabetical order wins.
// The first line of input will contains the number of websites names in the list (N, 1<N<=10), and the following N lines will each contain the name of a website.
// For e.g. Given the following input:
// 3
// Facebook
// Google
// Facebook
// The most common website is Facebook because it occurs 2 times in the list, and Google occurs only 1 time
// The expected output format is:
// Facebook


function processInput(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++){
        map.set(arr[i], map.get(arr[i]) ? map.get(arr[i]) + 1 : 1)
    }
    const sorted = new Map([...map.entries()].sort())
    let biggestVal = 0
    let biggestName = ''
    sorted.forEach((value, key) => {
        biggestVal = Math.max(biggestVal, value)
    })

    for (let [key, value] of sorted.entries()) {
        if (value === biggestVal) {
            biggestName = key;
            break;
        }
    }

    return biggestName
}

console.log(processInput(['Facebook', 'Google', 'Facebook']))

// async function getCustomers(page) {
//     const url = `https://randomuser.me/api?=page=${page}`;
//     let toRender = "";
  
//     try {
//       const response = await fetch(url);
//       toRender = response.json();
//     } catch (error) {
//       toRender = error.message;
//     }
//     return toRender;
//   }
  
//   export async function handler(event) {
//     console.log("Incoming Data API Begins");
  
//     const customers = await getCustomers(event.body.page);
//     return new Response({
//       statusCode: 200,
//       message: "Success",
//       responseBody: customers.results,
//     });
//   }


// const corsOptions = {
//     origin: "http://localhost:3001", // specify the allowed origin(s)
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // specify the allowed HTTP methods
//     credentials: true, // include credentials in CORS requests (e.g., cookies)
//   };
  
//   app.use(cors(corsOptions));

//------------------------------------------

// app.use("/images", express.static("images"));

// const imagesDirectory = path.resolve("images");

// app.get("/getImages", (req, res) => {
//   fs.readdir(imagesDirectory, (err, files) => {
//     if (err) {
//       res.status(500).json({ message: "Error reading the images directory" });
//       return;
//     }

//     const imageFiles = files.filter((file) => {
//       return path
//         .extname(file)
//         .toLowerCase()
//         .match(/\.(jpg|jpeg|png|gif)$/);
//     });

//     res.json({ images: imageFiles });
//   });
// });

//------------------------------------------

// app.get("/data/incoming", async (req, res) => {
//   const { statusCode, ...response } = await handler({ body: req.query });

//   res.status(statusCode);
//   res.send(response);
// });

//------------------------------------------


// app.get("/hi", async (req, res) => {
//   res.sendFile(path.resolve("shared/index.html"));
// });

// var callback = function (req, res, next) {
//   console.log("A");
//   next();
// };
// var callback1 = function (req, res, next) {
//   console.log("B") & next();
// };
// app.get(
//   "/sample",
//   [callback, callback1],
//   function (req, res, next) {
//     console.log("C");
//     next();
//   },
//   function (req, res) {
//     res.send("response");
//   },
// );


// Document Title				Sort Order (ascending)
// -------------------------------------------------------------------------------------
// Root Document					8
// 	Level 2 Document		7
// 		Level 3 Document	1
// Root Document					9
// 	Level 2 Document		2
// 		Level 3 Document	5
// 		Level 3 Document	6
// 	Level 2 Document		3
// 		Level 3 Document	4
    
    
// Document {
// 	Guid Id;
// 	Guid ParentId;
// 	int SortOrder;
// 	String Name;
// }


// We also have the “GetDocuments” method which will return only root parents if parentIds is null/empty. Otherwise it will return only documents that have one of the parentIds as their parent.

// Collection<Document> GetDocuments(Collection<Guid> parentIds);


// DocumentInfo {
// 	String Name;
// 	int IndentationLevel;
// }

// [{name: "Root Document", indentation: 0}, {name: "Level 2 document", indentation: 1}, ...]



// Root Document
// 	Level 2 Document
// 		Level 3 Document
// Root Document
// 	Level 2 Document
// 		Level 3 Document
// 		Level 3 Document
// 	Level 2 Document
// 		Level 3 Document
    
    
// input: [
// Document {
// 	Guid Id;
// 	Guid ParentId;
// 	int SortOrder;
// 	String Name;
// 	}
// ]

// output: [
// DocumentInfo {
// 	String Name;
// 	int IndentationLevel;
// }
// ]

// {
// 	id: '0'
// 	parentId: ''
// 	sortOrder: '8'
// 	name: 'Root Document'
// }

// // {name: "Root Document", indentation: 0}

// const roots = GetDocuments()
// const ids = roots.map((cur) => {cur.id})

// roots arr: [root1, root2]
// [level2, level2]

// const resultList = []

// const levels = -1

// function getOrderedData (ids){
// 	levels =+ 1 // 0 // 1

// 	let roots = GetDocuments(ids)
// 	roots.sort(prev, cur => {})

//   for (let i = 0; i < roots.length; i++){
//     resultList.push({name: roots[i].name, indentation: levels})
//     getOrderedData (roots[i].id)// [level2, level2]
//   }
//   return resultList
// }

// const data =  getOrderedData(rootIds)





// //[{
// 	id: '0'
// 	parentId: ''
// 	sortOrder: '8'
// 	name: 'Root Document'
// }]

// [level2, level2]



// roots arr: [root1{id, sortOrder}, root2]
// level2 arr: [[level2], [level2]]

// [level2, level2]
// [level3, level3]

















// Write a function that resolves “..” path traversal operators. It should take an absolute path with these operators and return the resolved path.

// Examples:
// /A/B/C/.. -> /A/B/C
// /A/B/C/../../D -> /A/D
// /A/B/C/../../D/E -> /A/D/E
// /A/B/../C/E/../../D -> /A/D

// let path = "/A/B/C/../../D"

// function resolvePath(path) {

// 	let removeAtIdx = []

//   let allDirs = firstDirs.split('/') [A B .. C .. D]
	
// 	let dotsNum = 0
//   for (let i = 0; i < allDirs.length; i++) {
//   	if (allDirs[i] === '..'){
//     	dotsNum =+ 1
//     }
    
//     if (dotsNum > 0 && pathArr[i] !== '..') {
//     	for (let j = 0; j < dotsNum; j++){
//       	removeAtIdx.push(i - (j + 1))
//       }
//     	dotsNum = 0
//     }
    
//     removeAtIdx = removeAtIdx.sort()
//     removeAtIdx = removeAtIdx.reverse()
    
//     //removeAtIdx => [6, 5, 1]
//     //[ A B .. C E .. .. D]
    
//     removeAtIdx.forEach(cur, idx => allDirs.splice(1, idx))
   
    
//   }

// //////////////////
// 	let dotsNum = 0
//   let lastDir = [] // "D"
//   let firstDirs = path.split('..')[0] // [A, B, C] // "/A/B/C/"     //[0]=> /A/B/C/
//   firstDirs = firstDirs.split('/') // [A, B, C]
// 	let pathArr = path.split('/') // [A, B, C, .., .. ,D]
  
//   for (let i = 0; i < pathArr.length; i++) {
//   	if (pathArr[i] === '..') {
//     	dotsNum =+ 1
//     }
//     if (dotsNum > 0 && pathArr[i] !== '..') {
//     	lastDir.push(pathArr[i]) // D, E
//     }
//   }
  
// // [A B C] // 1
// //
//   if (lastDir.length > 0) {
//     for (let i = 0; i < dotsNum; i++){
//       firstDirs.pop()
//     }
//   }
  
//   //[A]

  
//   //['/A']
  
//   const final = firstDirs.concat(lastDir) //[A, D, E]
  
//    return  `/${final.join('/')} // A/D/E 
  
// }







//   // Please do not modify the following imports
// import React, {useState, useEffect, useLayoutEffect} from 'react';
// import { PurchaseTypeButton } from './PurchaseTypeButton';
// import { QuantityButton } from './QuantityButton';
// import { AddToCartButton } from './AddToCartButton';
// import { LastAddedItem } from './LastAddedItem';

// // Import your files here

// //{
// //        id: 654321,
// //       price: 26.99,
// //        compareAtPrice: 31.99,
// //        type: 'subscription',
// //        count: 1,
// //        collectionId: 321,
// //}

// import { getProduct } from './utils'
// import { getCollection } from './utils'

// // Modify the content of this function to complete the question
// export const Shop = () => {
// const [selectedSubs, setSelectedSubs] = useState({});
// const [selectedOneTime, setSelectedOneTime] = useState({});
// const [selectedCart, setSelectedCart] = useState({});
// const [collection, setCollection] = useState([]);
// const [selectedType, setSelectedType] = useState('');
// const [selectedQty, setSelectedQty] = useState(1);
// const [cartItemId, setCartItemId] = useState(0);

// useEffect(() => {
//   getProduct().then((res) => {
//     setSelectedQty(res.count)
//     setSelectedType(res.type)
//   })

//   getCollection().then((res) => {
//     setCollection(res)
//   })
// }, [])

// useEffect(() => {
//   if (collection && collection.products && collection.products.length > 0) {
//     collection.products.forEach((cur) => {
//       if (cur.type === selectedType && cur.count === selectedQty) {
//         setSelectedCart(cur)
//       }
//       if (cur.type === 'subscription' && cur.count === selectedQty) {
//         setSelectedSubs(cur)
//       }
//       if (cur.type === 'one-time' && cur.count === selectedQty) {
//         setSelectedOneTime(cur)
//       }
//     })
//   }
// }, [selectedType, selectedQty])


//   return (
//     <div id="main">
//       <div className='purchase-box'>
//       <p>Purchase Type</p>
//         <div className='purchase-type-input'>
//           <PurchaseTypeButton type='one-time' price={selectedOneTime.price} quantity={selectedOneTime.count} selected={selectedType === 'one-time'} onClick={()=>{setSelectedType('one-time')}} />
//           <PurchaseTypeButton type='subscription' price={selectedSubs.price} quantity={selectedSubs.count} selected={selectedType === 'subscription'} onClick={()=>{setSelectedType('subscription')}} />
//         </div>
//       </div>

//       <div className='quantity-box'>
//         <p>Quantity</p>
//         <div className='quantity-input'>
//           <QuantityButton quantity={1} selected={selectedQty === 1} onClick={() => {setSelectedQty(1)}} />
//           <QuantityButton quantity={2} selected={selectedQty === 2} onClick={() => {setSelectedQty(2)}} />
//           <QuantityButton quantity={3} selected={selectedQty === 3} onClick={() => {setSelectedQty(3)}} />
//         </div>
//       </div>

//       <AddToCartButton price={selectedCart.price} compareAtPrice={selectedCart.compareAtPrice} onClick={() => {setCartItemId(selectedCart.id)}}/>

//       <LastAddedItem productId={cartItemId > 0 ? cartItemId : ''} />
//     </div>
//   );
// }

function BlackjackChallenge(strArr) {
    const cardValues = {
        "two": 2, "three": 3, "four": 4, "five": 5, "six": 6,
        "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        "jack": 10, "queen": 10, "king": 10, "ace": 1
    };
    const faceCardsOrder = ["jack", "queen", "king"];

    let total = 0;
    let aceCount = 0;
    strArr.forEach(card => {
        if (card === "ace") {
            aceCount++;
        } else {
            total += cardValues[card];
        }
    });

    for (let i = 0; i < aceCount; i++) {
        total += (total + 11 <= 21) ? 10 : 1;
    }

    const sortedCards = strArr.sort((a, b) => {
        if (a === "ace") return -1;
        if (b === "ace") return 1;
        if (faceCardsOrder.includes(a) || faceCardsOrder.includes(b)) {
            return faceCardsOrder.indexOf(a) - faceCardsOrder.indexOf(b);
        }
        return cardValues[a] - cardValues[b];
    });

    let result = total === 21 ? "blackjack" : (total > 21 ? "above" : "below");
    return result + " " + sortedCards.join(" ");
}

// Example usage
console.log(BlackjackChallenge(["three", "jack", "nine"])); // Output: above three nine jack
console.log(BlackjackChallenge(["five", "king"])); // Output: below five king

// Given an immutable array of integers a and an integer k, this array has below property:

// any integer inside subarray with window size k is unique each other already. 
// for example:
// a = [1, 2, 5, 6, 4, 13, 50, 17, 6] k = 5
//       [1, 2,5, 6, 4]
//           [2, 5,6,4, 13]
//             …..       [4, 13, 50, 17, 6] are arrays with all unique integers inside each array         
// The question is:

// implement a function:
//       boolean canRemove(a number[], k : number, index: number);
// after removing index-th location integer in the given array, if this property is still maintained, 
// return true, otherwise return false

// for above example:

// canRemove([1, 2, 5, 6, 4, 13, 50, 17, 6], 5, 6) -> false
// canRemove([1, 2, 5, 6, 4, 13, 50, 17, 6], 5, 1) -> true

// remove int
// check for window
// return true if all dist

const arr = [1, 2, 5, 6, 4, 13, 50, 17, 6]
const win = 5
const idx = 1

function findDist(arr, win, idx) {
  arr.splice(idx, 1)
  let found = new Map()
  let start = 0
  let end = win - 1
  let result = true
  while (end < arr.length) {
    for (let i = start; i <= end; i++) {
      if (found.has(arr[i])) {
        result = false
        break;
      }
      found.set(arr[i], i)
    }
    found = new Map()
    start += 1
    end += 1
  }
  return result
}

console.log(findDist(arr, win, idx))

// import "./styles.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// /**
//  * Please implement a form using the Formik useFormik hook and Yup schema validation.
//  *
//  * useFormik hook documentation: https://formik.org/docs/api/useFormik
//  * validation documentation: https://formik.org/docs/guides/validation
//  */

// export default function App() {
//   const SignupSchema = Yup.object().shape({
//     firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
//     lastName: Yup.string()
//       .min(2, "Too Short!")
//       .max(10, "Too Long!")
//       .required("Required"),
//     streetAddress: Yup.string().required("Required"),
//     city: Yup.string().required("Required"),
//     zip: Yup.number().required("Required"),
//   });

//   const { handleChange, handleSubmit, errors, touched, values } = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       streetAddress: "",
//       city: "",
//       zip: "",
//       // email: "",
//     },
//     validationSchema: SignupSchema,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <div className="App">
//       <form className="formContainer" onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name</label>
//         {errors.firstName && touched.firstName ? (
//           <div className="errorMsg">{errors.firstName}</div>
//         ) : null}
//         <input
//           id="firstName"
//           name="firstName"
//           type="text"
//           onChange={handleChange}
//           value={values.firstName}
//         />

//         <label htmlFor="lastName">Last Name</label>
//         {errors.lastName && touched.lastName ? (
//           <div className="errorMsg">{errors.lastName}</div>
//         ) : null}
//         <input
//           id="lastName"
//           name="lastName"
//           type="text"
//           onChange={handleChange}
//           value={values.lastName}
//         />

//         <label htmlFor="streetAddress">Street Address</label>
//         {errors.streetAddress && touched.streetAddress ? (
//           <div className="errorMsg">{errors.streetAddress}</div>
//         ) : null}
//         <input
//           id="streetAddress"
//           name="streetAddress"
//           type="text"
//           onChange={handleChange}
//           value={values.streetAddress}
//         />

//         <label htmlFor="city">City</label>
//         {errors.city && touched.city ? (
//           <div className="errorMsg">{errors.city}</div>
//         ) : null}
//         <input
//           id="city"
//           name="city"
//           type="text"
//           onChange={handleChange}
//           value={values.city}
//         />

//         <label htmlFor="zip">Zip</label>
//         {errors.zip && touched.zip ? (
//           <div className="errorMsg">{errors.zip}</div>
//         ) : null}
//         <input
//           id="zip"
//           name="zip"
//           type="number"
//           onChange={handleChange}
//           value={values.zip}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }



// Please write a function to generate a random 8-character password with the requirements below
//
// The following solutions use this key to describe the character categories:
// U = uppercase
// L = lowercase
// N = numeral
// S = special character
//
// 1. MUST Contain ONLY 2 lowercase letters, 2 uppercase letters, 2 numerals, and 2 special characters from the string "!@$%^&*"
//
// Bad Example: UUULLLNS (output example: ABCabc1$)
// UU LL NN SS
//
// 2. The character categories MUST NOT be adjacent and MUST occur in a random order
// Bad Example:  AB1b#1c$
// Good Example: 8Ga^Nb$5
//
// Example results
// aB&2uC!7
// A1!a@Ub9
// G8a^k5N$


function generatePassword() {
    let passwordArr = [];
  
    // Generate two items of each category (random), should be unique
  
    //Chars:
    const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; //9
    const upper = []
    for (let i = 0; i < lower.length; i++) {
      upper.push(lower[i].toLocaleUpperCase())
    }
    const special = ['$', '%', '!', '@', '$', '%', '^', '&', '*']; //8
    
    const numerial = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']; //9
  
    function findTwoRand(length) {
      let firstRand = Math.floor(Math.random() * length + 1)
      let secondRand = Math.floor(Math.random() * length + 1)
      while (firstRand === secondRand) {
        secondRand = Math.floor(Math.random() * length + 1)
      }
      return [firstRand, secondRand]
    }
  
    const uniqueLowerNums = findTwoRand(9) //[1, 2]
    const uniqueUpperNums = findTwoRand(9) //[1, 2]
    const uniqueSpChNums = findTwoRand(8) //[1, 2]
    const uniqueNumberNums = findTwoRand(9) //[1, 2]
  
    const uniqueLower = [...lower[uniqueLowerNums[0]], ...lower[uniqueLowerNums[1]]]
    const uniqueUpper = [...upper[uniqueUpperNums[0]], ...upper[uniqueUpperNums[1]]]
    const uniqueSpCh = [...special[uniqueSpChNums[0]], ...special[uniqueSpChNums[1]]]
    const uniqueNumbers = [...numerial[uniqueNumberNums[0]], ...numerial[uniqueNumberNums[1]]]
  
    const sets = [...[uniqueLower], ...[uniqueUpper], ...[uniqueSpCh], ...[uniqueNumbers]]
  
    // Mix them randomly but not adjacent
  
  // create 4 random [ 'J', 'I' ]
  // select one of two 
  const usedIdxs = new Map()
  for (let i = 0; i < sets.length; i++) {
    let randNum = Math.floor(Math.random() * 4)
    while (usedIdxs.has(randNum)) {
      randNum = Math.floor(Math.random() * 4)
    }
    console.log(randNum)
    usedIdxs.set(randNum, i)
    const set = sets[randNum] //[ 'i', 'j' ]
    console.log(set)
  
  }
  // console.log(passwordArr)
  // [ 'f', 'e' ]
  // [ 'J', 'I' ]
  // [ '^', '%' ]
  // [ '6', '0' ]
  
    // insert your code here
    const password  = passwordArr.join(',')
    return password;
  }
  
  console.log(generatePassword());
  
  // Test cases
  // 1. verify password length === 8
  // 2. verify each category present and has two units
  // 3. verify it's not adjacent
  // 4. verify results falls into rpedefined range
  // 5. findTwoRand returs two distinct numbers
  // 6. verify each category has unique values