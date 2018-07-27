function takeANumber(katzDeli, name){
  katzDeli.push(name) ;

  if(katzDeli.length > 0) {
    return "Welcome, " + name + ". " + "You are number " + katzDeli.length + " in line." ;
  } else {
    return "The line is currently empty." ;
  }
 }