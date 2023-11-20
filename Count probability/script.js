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