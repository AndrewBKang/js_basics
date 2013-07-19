var transpose = function(array){
  var output = [];
  var rows = array.length;
  var columns = array[0].length;
  for(var i = 0; i < rows; i++){
    var newRow = [];
    for(var j = 0; j < columns; j++){
      newRow.push(array[j][i])
    };
    output.push(newRow);
  };
  return output;
};

console.log(transpose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]));