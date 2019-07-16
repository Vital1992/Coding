
//Read input v 1.1 (Added support of brackets)
var splitted, output, final;
var output=[];

function inputValue(){
input = document.getElementById("typing").value.toLowerCase();
splitted = input.split(/[\s_]+/); //[\s,] means whitespace(\s) and , means comma
console.log(splitted);
};

document.getElementById('button').addEventListener('click', function(){
  output = [];
  inputValue();
  for (var i=0; i<splitted.length; i++){
    if (splitted[i].includes("(")){
      var res = '('+splitted[i].charAt(1).toUpperCase()+splitted[i].slice(2); //charAt select first char of the word in the array, toUpperCase makes it uppercase + slice adds the rest of the word
      output.push(res);
    }else{
      var res = splitted[i].charAt(0).toUpperCase()+splitted[i].slice(1); //charAt select first char of the word in the array, toUpperCase makes it uppercase + slice adds the rest of the word
      output.push(res);
    }
  };
  final = output.toString().replace(/,/g, ' ');//The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
  //console.log(final);
  let pElem = document.createElement('p');
  pElem.textContent = final;
  document.body.appendChild(pElem);
});

/*
//Read input v 1.0
var splitted, output, final;
var output=[];

function inputValue(){
input = document.getElementById("typing").value.toLowerCase();
splitted = input.split(/[\s_]+/); //[\s,] means whitespace(\s) and , means comma
console.log(splitted);
};

document.getElementById('button').addEventListener('click', function(){
  output = [];
  inputValue();
  for (var i=0; i<splitted.length; i++){
    var res = splitted[i].charAt(0).toUpperCase()+splitted[i].slice(1); //charAt select first char of the word in the array, toUpperCase makes it uppercase + slice adds the rest of the word
    output.push(res);
  };
  final = output.toString().replace(/,/g, ' ');//The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
  //console.log(final);
  let pElem = document.createElement('p');
  pElem.textContent = final;
  document.body.appendChild(pElem);
});
*/
