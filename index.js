function takeANumber(katzDeli, name){
  katzDeli.push(name) ;

  if(katzDeli.length > 0) {
    return "Welcome, " + name + ". " + "You are number " + katzDeli.length + " in line." ;
  } else {
    return "The line is currently empty." ;
  }
 }
 
 function nowServing(array){
  if(array.length === 0) {
    var response = "There is nobody waiting to be served!";
    console.log(response);
    return response;

  } else {
    var person = array.shift() ;
    var myResponse = "Currently serving " + person + "." ;
    return myResponse ;
  }
 }
 
var katzDeli = [];

function currentLine(array) {
  if(array.length < 1) {
    return "The line is currently empty." ;
  } else {
    var queue = [] ;

  array.forEach(function(name, index) {
    queue.push((index + 1).toString() + ". " + name);
    });
   var response = "The line is currently: " + queue.join(", ")
   return response;
  }
 }