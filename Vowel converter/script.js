/*
Please write a small snippet in your favorite programming/scripting language
to replace all vowels in an input string with its nearest consonant.
*/

var input, side, splitted;
var output=[];
//left side closest consonants
var consonants = [consonantLeft =
{
a:'b',
e:'d',
i:'h',
o:'n',
u:'t',
y:'x', b:'b',c:'c',d:'d',f:'f',g:'g',h:'h',j:'j',k:'k',l:'l',m:'m',n:'n',p:'p',q:'q',r:'r',s:'s',t:'t',v:'v',w:'w',x:'x'
},
//right side closest consonants
consonantRight =
{
a:'b',
e:'f',
i:'j',
o:'p',
u:'v',
y:'x',b:'b',c:'c',d:'d',f:'f',g:'g',h:'h',j:'j',k:'k',l:'l',m:'m',n:'n',p:'p',q:'q',r:'r',s:'s',t:'t',v:'v',w:'w',x:'x'
}];

//select left or right side
function readSelection(){
var s = document.getElementById("select");
side = s.options[s.selectedIndex].value;
//or
//side = document.getElementById("select").options[document.getElementById("select").selectedIndex].value;
//console.log(side);
};

//read input
function inputValue(){
input = document.getElementById("typing").value.toLowerCase();
splitted = input.split("");
//console.log(splitted);
};

//replace vowel with consonant per button click
document.getElementById('button').addEventListener('click', function(){
  output = [];
  readSelection();
  inputValue();

  for (var i=0; i<splitted.length; i++){
    var a=consonants[side][splitted[i]];
    output.push(a);
  };
  var final = output.toString(); //or output.join() to convert array into string
  var converted = final.replace(/,/g, '');//The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
  if (converted){alert(converted)};
});
