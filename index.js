var katzDeli = [];

function line(array) {
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