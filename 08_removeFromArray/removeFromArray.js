const removeFromArray = function(arr,num) {

arr.map((item,index)=>{
    if(item===num) arr.splice(index,1)
  });
  
  return arr
};

// Do not edit below this line
module.exports = removeFromArray;
