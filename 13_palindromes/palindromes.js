const palindromes = function (str) {

  return  str.split('').reverse().join('') === str

};


console.log(palindromes('isi'))
// Do not edit below this line
module.exports = palindromes;
