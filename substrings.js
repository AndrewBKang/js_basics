var substrings = function(string){
  var output = [];
  for(var i = 0; i < string.length; i++){
    for(var j = i + 1; j <= string.length; j++){
      output.push(string.substring(i,j));
    };
  };
  return output;
};

