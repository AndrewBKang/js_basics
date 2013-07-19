var myEach = function(array, funktion){
  for(var i = 0; i < array.length; i++){
    funktion(array[i]);
  };
  return array
};

var add = function(num,num2){
  return num+num2
};

var myMap = function(array, funktion){
  output = [];
  var intermediate = function(num){
    output.push(funktion(num))
  };
  myEach(array, intermediate);
  return output;
};

// inject(0){|s,e| s + e} = sum
// s = 0 then myEach through the element e's
var inject = function(array,start,funktion){
  var output = start;
  var intermediate = function(element){
    output = funktion(output,element);
  };
  myEach(array, intermediate);
  return output;
};

console.log(inject([1,2,3],5,add))