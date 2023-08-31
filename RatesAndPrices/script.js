const StrRates = "5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;";

// Step 1: Split the input string into rate-price-lockPeriod groups
const ratePriceLockGroups = StrRates.split(';').filter(Boolean);

// Step 4: Create a two-dimensional array (matrix) to store values
const matrix = [];

// Step 2 and 3: Process each rate-price-lockPeriod group
for (const group of ratePriceLockGroups) {
  const [ratePrice, lockPeriod] = group.split(':');
  const rates = ratePrice.split(',').map(Number);
  const lock = parseInt(lockPeriod.substring(1)); // Remove 'L' and convert to integer

  // Step 3: Split rates and prices into individual pairs
  const pairs = [];
  for (let i = 0; i < rates.length; i += 2) {
    pairs.push([rates[i], rates[i + 1]]);
  }

  // Add pairs and lock period to the matrix
  matrix.push({ pairs, lock });
}

console.log(matrix)
// [
//   { pairs: [ [Array], [Array], [Array] ], lock: 10 },
//   { pairs: [ [Array], [Array], [Array] ], lock: 20 }
// ]

// Create the HTML table
// const table = document.createElement('table');
// const headerRow = document.createElement('tr');
// headerRow.innerHTML = "<th></th>"; // Empty corner cell
// for (const entry of matrix) {
//   const lockCell = document.createElement('th');
//   lockCell.textContent = entry.lock;
//   headerRow.appendChild(lockCell);
// }
// table.appendChild(headerRow);

// for (let i = 0; i < matrix[0].pairs.length; i++) {
//   const row = document.createElement('tr');
//   const rateCell = document.createElement('td');
//   rateCell.textContent = matrix[0].pairs[i][0];
//   row.appendChild(rateCell);
//   for (const entry of matrix) {
//     const priceCell = document.createElement('td');
//     priceCell.textContent = entry.pairs[i][1];
//     row.appendChild(priceCell);
//   }
//   table.appendChild(row);
// }

// document.body.appendChild(table);

// Result
//     10	20
// 5	  100	99
// 5.5	101	100
// 6	  102	101

//------------------------------------------------------------------------------------------------
// My solution:

// Rate: 5, Price: 100	Rate: 5.5, Price: 101	Rate: 6, Price: 102	Lock Period: 10
// Rate: 5, Price: 99	Rate: 5.5, Price: 100	Rate: 6, Price: 101	Lock Period: 20

// const rates = "5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;";
const rates = "5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;5.0,98,5.5,99,6.0,100:L30;"

const rows = {}

const groups = rates.split(';').filter(n => n) // Filter out empty vals
let locks = groups.map((lock)=> lock.slice(lock.indexOf('L') + 1))
locks = [''].concat(locks) // Add empty el to the begining to match HTML table Pattern

const pairs = []
groups.forEach((cur, i)=> {
  const trimmed = cur.slice(0, cur.indexOf(':')).split(',')
  console.log(trimmed)
  // [ '5.0', '100', '5.5', '101', '6.0', '102' ]
  // [ '5.0', '99', '5.5', '100', '6.0', '101' ]
  for (let i = 0; i < trimmed.length; i += 2) {
    pairs.push([trimmed[i], trimmed[i + 1]]);
  }
})
console.log(groups)
// [ '5.0,100,5.5,101,6.0,102:L10', '5.0,99,5.5,100,6.0,101:L20' ]

console.log(pairs)
// [
//   [ '5.0', '100' ],
//   [ '5.5', '101' ],
//   [ '6.0', '102' ],
//   [ '5.0', '99' ],
//   [ '5.5', '100' ],
//   [ '6.0', '101' ]
// ]

pairs.forEach((cur, i) => {
  if (!rows[cur[0]]) {
    rows[cur[0]] = []
  }
  rows[cur[0]].push(pairs[i][1])
})
console.log(rows)
// console.log(rows)
// {
//   '5.0': [ '100', '99' ],
//   '5.5': [ '101', '100' ],
//   '6.0': [ '102', '101' ]
// }

// Converrt obj to arr
const tableData = Object.entries(rows);

// Put rate and prices im one arr to render table
const finalTable = tableData.map((cur) => {
  const arr = [];
  arr.push(cur[0]);
  return arr.concat(cur[1]);
});

console.log(finalTable)
// [
//   [ '5.0', '100', '99', '98' ],
//   [ '5.5', '101', '100', '99' ],
//   [ '6.0', '102', '101', '100' ]
// ]

{/* <table>
<tbody>
  <tr>
    {locks.map((lock) => {
      return <th>{lock}</th>;
    })}
  </tr>
  {finalTable.map((val, i) => {
    return (
      <tr>
        {val.map((cur) => {
          return <td>{cur}</td>;
        })}
      </tr>
    );
  })}
</tbody>
</table> */}

// Table will look like:

//      10	20	30
//
// 5.0	100	99	98
// 5.5	101	100	99
// 6.0	102	101	100


// To represent as a matrix:
console.log(finalTable.reverse())
finalTable.push(locks)
console.log(finalTable.reverse())
// [
//   [ '', '10', '20', '30' ],
//   [ '5.0', '100', '99', '98' ],
//   [ '5.5', '101', '100', '99' ],
//   [ '6.0', '102', '101', '100' ]
// ]