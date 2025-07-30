const leapYears = function(year) {
  const divisibleBy4 = year % 4 === 0;
  const divisibleBy100 = year % 100 === 0;
  const divisibleBy400 = year % 400 === 0;

  if (divisibleBy4 && (!divisibleBy100 || divisibleBy400)) 
    return true;
  else 
    return false;
  


};

console.log(leapYears(2157))

// Do not edit below this line
module.exports = leapYears;
