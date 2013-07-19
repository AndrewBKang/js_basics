var multiples = function(array){
  var output = [];
  for(var i = 0; i < array.length; i++){
    output.push(array[i]*2);
  };
  return output;
};

console.log(multiples([1,2,3]));