var myUniq = function(array){
  var output = [];
  for(var i = 0; i < array.length; i++){
    var flag = true;
    var j = 0;
    while(j < output.length){
      if (array[i] === output[j]){
        flag = false;
      };
      j++;
    };

    if(flag === true){
      output.push(array[i]);
    };

  };
  return output;
};

console.log(myUniq([1,2,2,3,4,4,1]));