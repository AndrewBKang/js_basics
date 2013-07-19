var bubbleSort = function(array){
  var unsorted = true;
  while(unsorted){
    unsorted = false
    for(var i = 0; i + 1 < array.length; i++){
      var old = array[i]
      if (array[i]>array[i+1]){
        array[i] = array[i+1];
        array[i+1] = old;
        unsorted = true;
      };
    };
  };
  return array;
};

console.log(bubbleSort([1,5,3,4,67,0]));