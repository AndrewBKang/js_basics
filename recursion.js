var US = require('./underscore.js');

var range = function(min, max){
  if(min === max){
    return [min]
  } else {
    return [min].concat(range(min + 1, max))
  };
};

// console.log(range(1,4))

var sum = function(array){
  if(array.length === 1){
    return array[0]
  } else {
    return array.shift() + sum(array)
  };
};

// console.log(sum(range(1,4)))

var exp = function(base, power){
  if(power === 0){
    return 1
  } else {
    return base * exp(base, power - 1)
  };
};

var exp2 = function(base, power){
  if(power === 0){
    return 1
  } else if(power % 2 === 0) {
    return Math.pow(exp2(base, power / 2),2)
  } else {
    return base * Math.pow(exp2(base, (power -1) / 2), 2)
  };
};




// console.log(exp2(2,3))

var fibonacci = function(number){
  if(number === 0){
    return [];
  } else if(number === 1) {
    return [0];
  } else if(number === 2) {
    return [0,1];
  } else {
    var lastFib = fibonacci(number-1)
    // console.log(number)
    lastFib.push(lastFib[lastFib.length - 1] + lastFib[lastFib.length - 2]);
    return lastFib
  };
};

var binarySearch = function(array,number){
  var middle = Math.round((array.length - 1) / 2)
  if (array[middle] === number){
    return middle;
  } else if (array.length === 1){
    return null;
  } else if (array[middle] < number){
    var next = binarySearch(array.slice(middle,array.length), number)
    if (next){
      return middle + next;
    } else{
      return null;
    }
  } else {
    return binarySearch(array.slice(0,middle), number);
  }
};

// console.log(binarySearch([1,2,3,4,5,6,7,8,9],2));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9],6));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9],19));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9],1));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9],9));
Array.prototype.clone = function(){
	return Array.apply(null,this)
};

Array.prototype.clone = function(){
  var copy = [];
  for(var i = 0; i < this.length; i++){
    copy.push(this[i]);
  }
  return copy;
};

var min = function(arr){
  var copy = arr.clone()
  var sorted = copy.sort(function(a,b){return a-b});
  return sorted[0];
}


var makeChange = function(coins, amount){
  var ranks = []

  for(var i = 0; i < coins.length; i++){
    var coin = coins[i]
    if (coin > amount){
      var rank = 1000000.0
    } else {
      var rank = ( (amount % coin) + (Math.round(amount / coin)-1)*2.71828 )
    };
    ranks.push(rank)
  };

  var bestCoin = coins[ranks.indexOf(min(ranks))]


  if(amount - bestCoin === 0){
    return [bestCoin]
  } else if (amount > 0) {
    return [bestCoin].concat(makeChange(coins, (amount - bestCoin)))
  };
};

// console.log(makeChange([15,18,8,11,1], 101))

var merge = function(arr1,arr2){
  var output = [];
  while (arr1.length > 0 && arr2.length > 0){
    (arr1[0] < arr2[0]) ? output.push(arr1.shift()) : output.push(arr2.shift())
  };
  output = (arr1.length > 0) ? output.concat(arr1) : output.concat(arr2)
  return output;
}

var mergeSort = function(input){
  var middle = Math.round(input.length/2);
  var left = input.clone().splice(0,middle);
  var right = input.clone().splice(middle,input.length);

  if (input.length <= 1){
    return input;
  } else {
    return merge(mergeSort(left),mergeSort(right));
  }
}

// console.log(mergeSort([5,4,6,8,3,7,2,1,788,4]));
// console.log(merge([4],[1]));


var subsets = function(array){
  if (array.length === 0){
    return [[]]
  } else {
    var val = array[0];
    var subs = subsets(US.rest(array.clone()))
    var newsubs = subs.map(function(num){return [val].concat(num);} )
    return subs.concat(newsubs)
  }
};


console.log(subsets([1,25,2]))
// console.log([].concat([]))