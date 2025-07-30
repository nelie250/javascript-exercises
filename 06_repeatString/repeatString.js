const repeatString = function(string,num) {
  let word = "";
  if(num<0){
    return"Enter a positive number"
  }
  else{
    
  for(i=0; i<num; i++) {
    word += string
  }}

return word
};

console.log(repeatString('hello', 3))

// Do not edit below this line
module.exports = repeatString;
