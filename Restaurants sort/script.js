// There will be a list of restaurants in the form of a 2-dimensional string array
// where each element contains [name, relevance, price, cuisine].
// Relevance and price are both on a scale between 1 and 20.
// Given the sort column (which can be between 0 and 2, can't sort cuisine),
// the sort order (0: ascending, 1: descending),
// the number of restaurants to be displayed on each page (except for the last page which may have fewer),
// a page number (which starts at 0),
// determine the list of restaurant names in the specified page while respecting the restaurant's order.
// The output should be a string array of just the restaurant names on that page.

// Example
// String[][] restaurants = new String[][]{
//     {"Moo Bong Ri", "10", "7", "Korean"},
//     {"Marufuku Ramen", "3", "3", "Ramen"},
//     {"Homeroom", "17", "8", "American"},
//     {"AZIT", "8", "4", "Korean"},
//     {"Cholita Linda", "12", "7", "Latin American"}
// };
// int sortParameter = 1; which can be between 0 and 2, can't sort cuisine),
// int sortOrder = 0; sort order (0: ascending, 1: descending),
// int restaurantsPerPage = 3;
// int pageNumber = 1;

// Explanation
// n = 5 restaurants
// Sort them by (relevance: 1) in ascending order
// String[][] restaurants = new String[][]{
//     {"Marufuku Ramen", "3", "3", "Ramen"},
//     {"AZIT", "8", "4", "Korean"},
//     {"Moo Bong Ri", "10", "7", "Korean"},
//     {"Cholita Linda", "12", "7", "Latin American"}
//     {"Homeroom", "17", "8", "American"},
// };
// Display up to 3 restaurants in each page
// The page 0 contains 3 restaurant names so:
// String[] page0 = new String[]{"Marufuku Ramen", "AZIT", "Moo Bong Ri"}
// and page 1 contains 2 restaurants names, so
// String[] page1 = new String[]{"Cholita Linda", "Homeroom"}

//[name, relevance, price, cuisine]
const restaurants = [
    ["Moo Bong Ri", "10", "7", "Korean"],
    ["Marufuku Ramen", "3", "3", "Ramen"],
    ["Homeroom", "17", "8", "American"],
    ["AZIT", "8", "4", "Korean"],
    ["Cholita Linda", "12", "7", "Latin American"]
]

const sortParameter = 1; // which can be between 0 and 2, can't sort cuisine),
const sortOrder = 0; // sort order (0: ascending, 1: descending),
const restaurantsPerPage = 3;
const pageNumber = 2;

function getNames (restaurants, sortParameter, sortOrder, restaurantsPerPage, pageNumber){
    //Covert relevance, price to int
    restaurants.forEach((val) => {
        val[1] = parseInt(val[1])
        val[2] = parseInt(val[2])
    })
    
    //Sort based on param
    restaurants.sort((a,b) => {
        if (sortOrder === 0){
            return a[sortParameter] - b[sortParameter]
        } else {
             return b[sortParameter] - a[sortParameter]
        }
    })

    
    //Calc strt and end of the page
    
    let startIndex = pageNumber * restaurantsPerPage
    let endIndex = Math.min(startIndex + restaurantsPerPage, restaurants.length)

    
    let pageNames = []
    for (let i = startIndex; i < endIndex; i++){
        pageNames.push(restaurants[i][0])
    }
    //Extract names for the cur page
    
    console.log(pageNames)
    return pageNames
}
getNames(restaurants, sortParameter, sortOrder, restaurantsPerPage, pageNumber)


// Now imagine that we only want to show one restaurant of each cuisine if possible so that
// one cuisine does not fill up the entire search results page. It should otherwise preserve
// the ordering.

// Explanation
// n = 5 restaurants
// Sort them by (relevance: 1) in ascending order
// String[][] restaurants = new String[][]{
//     {"Marufuku Ramen", "3", "3", "Ramen"},
//     {"AZIT", "8", "4", "Korean"},
//     {"Moo Bong Ri", "10", "7", "Korean"},
//     {"Cholita Linda", "12", "7", "Latin American"}
//     {"Homeroom", "17", "8", "American"},
// };
// Display up to 3 restaurants in each page
// The page 0 contains 3 restaurant names so:
// String[] page0 = new String[]{"Marufuku Ramen", "AZIT", "Cholita Linda"}
// and page 1 contains 2 restaurants names, so
// String[] page1 = new String[]{"Moo Bong Ri", "Homeroom"}
// See how Cholita Linda now appears in page 0 to avoid two korean restaurants in the results

function getNames2 (restaurants, sortParameter, sortOrder, restaurantsPerPage, pageNumber){
    //Covert relevance, price to int
    restaurants.forEach((val) => {
        val[1] = parseInt(val[1])
        val[2] = parseInt(val[2])
    })
    
    //Sort based on param
    restaurants.sort((a,b) => {
        if (sortOrder === 0){
            return a[sortParameter] - b[sortParameter]
        } else {
             return b[sortParameter] - a[sortParameter]
        }
    })
    
    // restaurants for testing, remove
    restaurants = [
    [ 'Marufuku Ramen', 3, 3, 'Korean' ],
    [ 'AZIT', 8, 4, 'Korean' ],
    [ 'Moo Bong Ri', 10, 7, 'American' ],
    [ 'Cholita Linda', 12, 7, 'American' ],
    [ 'Bong Ri', 10, 7, 'Korean' ],
    [ 'Homeroom', 17, 8, 'American' ],
    ]
    let result = []
    while (restaurants.length > 0) {
      let {res, idxs} = getDist(restaurants, restaurantsPerPage)
  
      result.push(res)
  
      idxs.reverse()
  
      idxs.forEach((cur) => {
        restaurants.splice(cur, 1)
      })
  
    }
    console.log(result)
    // [
    //   [
    //     [ 'Marufuku Ramen', 3, 3, 'Korean' ],
    //     [ 'Moo Bong Ri', 10, 7, 'American' ]
    //   ],
    //   [
    //     [ 'AZIT', 8, 4, 'Korean' ],
    //     [ 'Cholita Linda', 12, 7, 'American' ]
    //   ],
    //   [ 
    //     [ 'Bong Ri', 10, 7, 'Korean' ], 
    //     [ 'Homeroom', 17, 8, 'American' ] 
    //   ]
    // ]
    
    return result
  }
  
  function getDist(arr, limit){
    let dist = new Set()
    let res = []
    let idxs = []
    for (let i = 0; i < arr.length; i++){
      // console.log(res)
      if (!dist.has(arr[i][3])){
        res.push(arr[i])
        idxs.push(i)
      }
      if (res.length === limit){
        break
      }
      dist.add(arr[i][3])
    }
    return {res, idxs}
  }
  
  getNames2(restaurants, sortParameter, sortOrder, restaurantsPerPage, pageNumber)