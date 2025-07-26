const removeFromArray = function(arr,num) {

arr.map((item,index)=>{
    if(item===num) arr.splice(index,1)
  });
  
  return arr
};
console.log(removeFromArray([3,5,8,1],1));
// Do not edit below this line
module.exports = removeFromArray;
