let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //import XMLHttpRequest
let xhr = new XMLHttpRequest(); //new XMLHttpRequest
let body = {'key': 123123}; //specify body
xhr.open('POST', 'Link'); //call method and uri
xhr.responseType = 'json';
//xhr.timeout = 10000; //can use timeout
xhr.setRequestHeader('Content-Type','application/json'); //headers goes one by one
xhr.setRequestHeader('Key','Value');
xhr.send(JSON.stringify(body)) //stringify method is used to pass body as JSON
xhr.onload = function(){
  let response = JSON.parse(xhr.responseText);
  console.log(response.jwt) //JSON.parse converts response into JSON
};
/*
// To call XMLHttpRequest response from outside
function getJWT(callback){
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //import XMLHttpRequest
let xhr = new XMLHttpRequest(); //new XMLHttpRequest
let body = {'Key': 123123}; //specify body
xhr.open('POST', 'Link'); //call method and uri
xhr.responseType = 'json';
//xhr.timeout = 10000; //can use timeout
xhr.setRequestHeader('Content-Type','application/json'); //headers goes one by one
xhr.setRequestHeader('Key','Valur');
xhr.send(JSON.stringify(body)) //stringify method is used to pass body as JSON
xhr.onload = function(){
  callback(JSON.parse(xhr.responseText));
};
};
getJWT(function(data){console.log(data.jwt)})
*/
