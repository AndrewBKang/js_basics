var twoSum = function(array){
  var output = [];
  for(var i = 0; i < array.length; i++){
    // var pair =[]
    for(var j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === 0){
        output.push([i, j])
      };
    };
  };
  return output
};

console.log(twoSum([-1, 0, 2, -2, 1]));