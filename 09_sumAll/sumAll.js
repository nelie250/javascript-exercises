const sumAll = function(num1,num2) {

   if (num1 > num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }

  if(num1 < 0 || num2 < 0) return "invalid number";

  let sum = 0;

  for(let i = num1; i<=num2; i++){
    sum+=i;
  }
return sum

};
console.log(sumAll(7,4))

// Do not edit below this line
module.exports = sumAll;
